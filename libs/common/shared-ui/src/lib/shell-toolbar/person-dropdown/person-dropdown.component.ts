import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthFacade } from '@stream-platform/auth-data-access';

@Component({
  selector: 'lib-person-dropdown',
  standalone: false,
  templateUrl: './person-dropdown.component.html',
  styleUrl: './person-dropdown.component.css',

})
export class PersonDropdownComponent {

  constructor(private authFacade: AuthFacade) {}

  @Output()
  closeDropdown = new EventEmitter<void>();

  @Output()
  goToProfile = new EventEmitter<void>();

  onClose() {
    this.closeDropdown.emit();
  }

  onLogout(){
    this.authFacade.logout();
    this.onClose();
  }

  onProfile(){
    this.goToProfile.emit();
  }

}
