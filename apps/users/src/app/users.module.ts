import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonSharedUiModule } from '@stream-platform/common-shared-ui';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule, MatSelectModule, MatFormFieldModule,
    RouterModule.forChild(
      [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: UsersListComponent
        },
      ],
    ),
  ],
  providers: [],
  exports: [UsersListComponent],
})
export class UsersModule {}
