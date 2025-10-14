import { NgModule } from '@angular/core';
import { ShellToolbarComponent } from './shell-toolbar/shell-toolbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatars';
import { PersonDropdownComponent } from './shell-toolbar/person-dropdown/person-dropdown.component';

@NgModule({
  exports: [ShellToolbarComponent, UiButtonComponent, NavbarComponent],
  declarations: [ShellToolbarComponent, UiButtonComponent, NavbarComponent, PersonDropdownComponent],
  imports: [CommonModule, FormsModule, RouterModule, AvatarModule]
})
export class CommonSharedUiModule {}
