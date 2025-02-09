import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {map} from "rxjs/operators";
import {AuthService} from "./auth.service";

export function uniqueUsernameValidator(authService: AuthService):AsyncValidatorFn  {
  return (control: AbstractControl) => {
    //console.log("performing unique component validation");
    return authService.uniqueUsernameByReference(control.value)
      .pipe(
        map(result => !result ? {usernameNotUnique: true} : null ));
  }
}
