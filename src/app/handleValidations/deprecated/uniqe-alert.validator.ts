import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {AlertService} from "../../services/alert.service";
import {map} from "rxjs/operators";

export function uniqueAlertValidator(alertService: AlertService):AsyncValidatorFn  {
  return (control: AbstractControl) => {
    //console.log("performing unique alert validation");
    return alertService.uniqueAlertByReference(control.value)
      .pipe(
        map(result => !result ? {alertNotUnique: true} : null ));
  }
}
