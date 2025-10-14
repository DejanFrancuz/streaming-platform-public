import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordsMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const changePassword = control.get('changePassword')?.value;
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (!changePassword) {
    return null;
  }

  if (!password || !confirmPassword) {
    return { passwordRequired: true };
  }

  if (password !== confirmPassword) {
    return { passwordsMismatch: true };
  }

  return null;
};

