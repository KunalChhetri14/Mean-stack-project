import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const regex = new RegExp(
      '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}'
    );
    if (!regex.test(control.value)) {
      return {
        IsPasswordError: true
      };
    }
  }

  return null;
}

export function confirmPassValidator(control: AbstractControl) {
  if (control && (control.value != null || control.value != undefined)) {
    const confirmPass = control.value;
    const passControl = control.root.get('password');
    if (passControl) {
      const passValue = passControl.value;
      if (confirmPass != passValue || passValue === '') {
        return {
          noMatch: true
        };
      }
    }
  }
}
