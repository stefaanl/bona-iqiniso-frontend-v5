import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {map} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {AlertService} from "../../services/alert.service";

export function existAlertValidator(alertService: AlertService):AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (control.value === '' || control.value === null || control.value === undefined) return of(null)
    return alertService.existAlertByReference(control.value)
      .pipe(
        map(result => !result ? {alertNotExist: true} : null));
  }
}
