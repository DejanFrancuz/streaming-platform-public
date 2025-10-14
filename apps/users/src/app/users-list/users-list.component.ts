import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade, Person } from '@stream-platform/auth-data-access';
import { UserFacade, User } from '@stream-platform/users-data-access'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  users$!: Observable<User[] | null>;
  person$!: Observable<Person | null>
  displayedColumns: string[] = ['userId', 'username', 'firstName', 'lastName','email', 'role', 'actions'];

  constructor(private userFacade: UserFacade, private authFacade: AuthFacade, private router: Router) {}

  roles = ['MEMBER', 'ADMIN'];

onRoleChange(user: User, newRole: string): void {

  const updatedUser = {
    ...user,
    permissions: [newRole]
  };

  this.userFacade.updateUser(updatedUser);
}

  ngOnInit(): void {
    this.person$ = this.authFacade.selectedAuthPerson$;
    this.userFacade.getUsers();

    this.users$ = this.userFacade.selectUsers$;
    }

    editUser(userId: number){
      this.router.navigateByUrl(`/edit/${userId}`)

    }

  deleteUser(id: number) {
    this.userFacade.deleteUser(id);
  }
}
