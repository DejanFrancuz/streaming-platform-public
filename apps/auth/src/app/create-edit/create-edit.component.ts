import { Component, OnDestroy, OnInit } from '@angular/core';
import { User, UserFacade } from '@stream-platform/users-data-access';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordsMatchValidator } from '../validators/password.validator';

@Component({
  selector: 'app-edit-user',
  standalone: false,
  templateUrl: './create-edit.component.html',
  styleUrl: './create-edit.component.css',
})
export class CreateEditUserComponent implements OnInit, OnDestroy {
  userId!: number | null;

  private unsubscribe$ = new Subject<void>();

  isEditMode = false;

  editForm!: FormGroup;

  constructor(private userFacade: UserFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.isEditMode = !!this.userId;

    this.userFacade.getUserById(this.userId);

    this.userFacade.selectSelectedUser$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user) => {
        if (user) {
          this.editForm.patchValue({
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            permissions: user.permissions,
          });
        }
      });

      this.editForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      permissions: new FormControl([''], [Validators.required]),

       ...(this.isEditMode
      ? {
          changePassword: new FormControl(false),
          password: new FormControl(''),
          confirmPassword: new FormControl(''),
        }
      : {
          password: new FormControl('', [Validators.required]),
          confirmPassword: new FormControl('', [Validators.required]),
        }),
  },
    { validators: passwordsMatchValidator }
  );
  }

  onSubmit() {
    if (!this.editForm.valid) return;

    const formValue = this.editForm.value as {
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    permissions: string[];
    password?: string;
    confirmPassword?: string;
    changePassword?: boolean;
  };

    const { email, username, firstName, lastName, permissions, changePassword, password } =
      formValue;

    if (
      email == null ||
      username == null ||
      firstName == null ||
      lastName == null ||
      permissions == null ||
      password == null
    ) {
      console.error(
        'Neka polja su null/undefined i forma ne bi trebalo da je validna.'
      );
      return;
    }
    const user: User = {
      userId: this.userId || undefined,
      email,
      username,
      firstName,
      lastName,
      permissions,
    };

    if (password.trim() && (changePassword || !this.isEditMode)) {
      user.password = password;
    }

    return this.isEditMode ? this.userFacade.updateUser(user) : this.userFacade.createUser(user);
  }

  get showingPasswords(){
    return this.editForm.get('changePassword')?.value;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
