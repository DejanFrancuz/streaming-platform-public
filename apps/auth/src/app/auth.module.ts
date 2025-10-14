import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CommonSharedUiModule } from '@stream-platform/common-shared-ui';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CreateEditUserComponent } from './create-edit/create-edit.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [LoginComponent, CreateEditUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes),
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    CommonSharedUiModule
  ],
  providers: [],
  exports: [LoginComponent, CreateEditUserComponent]
})
export class AuthModule {
}
