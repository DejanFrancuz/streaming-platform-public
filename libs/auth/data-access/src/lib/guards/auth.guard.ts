import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthFacade } from '../store/facade/auth.facade';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authFacade: AuthFacade, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authFacade.selectedAuthPerson$.pipe(
      map((person) => {
        if (person) return true;
        return this.router.createUrlTree(['auth/login']);
      })
    );
  }
}
