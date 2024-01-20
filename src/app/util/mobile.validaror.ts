import { FormControl } from "@angular/forms";

export class CustomValidators{
  static checkMobile(control:FormControl) {
    const PHONE_REGEXP = /^[6-9]\d{9}$/;
    // console.log(PHONE_REGEXP.test(control?.value));
    if (control?.value  && !PHONE_REGEXP.test(control?.value)) {
      return {invalidNumber: true}
    }
    return null;
  }
}
