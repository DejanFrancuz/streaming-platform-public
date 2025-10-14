import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateEditUserComponent } from './create-edit/create-edit.component';

export const appRoutes: Route[] = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'create-edit/:userId',
      component: CreateEditUserComponent,
    },
    {
      path: 'create-edit',
      component: CreateEditUserComponent,
    }
];
