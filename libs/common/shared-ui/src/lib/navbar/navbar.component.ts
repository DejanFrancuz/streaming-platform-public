import { Component, OnDestroy, OnInit } from '@angular/core';
import { Person } from '@stream-platform/auth-data-access';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AuthFacade } from '../../../../../auth/data-access/src/lib/store/facade/auth.facade';

@Component({
  selector: 'libs-shell-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy{
  person!: Person | null;

  private unsubscribe$ = new Subject<void>();

  constructor(private authFacade: AuthFacade){}
  ngOnInit(): void {
    this.authFacade.selectedAuthPerson$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(person => {
        this.person = person;
      });
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  get isAdmin(){
    return this.person?.permissions.includes('ADMIN');
  }
}
