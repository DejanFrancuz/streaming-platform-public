import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'stream-platform-ui-button',
  standalone: false,
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.css'
})
export class UiButtonComponent {
  @Input() variant: 'primary' | 'danger' | 'success' = 'primary';
  @Input() disabled = false;

   @Output() buttonPressed = new EventEmitter<Event>();

  handleClick(event: Event) {
    if (!this.disabled) {
      this.buttonPressed.emit(event);
    }
  }
}
