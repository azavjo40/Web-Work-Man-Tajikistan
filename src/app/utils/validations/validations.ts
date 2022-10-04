import { FormGroup } from '@angular/forms';

export function matchPassword(password: string, confirmPassword: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[password];
    const matchingControl = formGroup.controls[confirmPassword];
    if (!control.value && !matchingControl.value) return;
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ matchPassword: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
