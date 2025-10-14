import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@stream-platform/auth-data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shell-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class ShellLayoutComponent implements OnInit{

  public personLoading$!: Observable<boolean>;

  constructor(private authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.personLoading$ = this.authFacade.personLoaded$;
    this.authFacade.init();
  }

}
