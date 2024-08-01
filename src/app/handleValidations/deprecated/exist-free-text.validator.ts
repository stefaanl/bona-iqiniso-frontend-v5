import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {map} from "rxjs/operators";
import {FreeTextService} from "../../services/free-text.service";
import {Observable, of} from "rxjs";

export function existFreeTextValidator(freeTextService: FreeTextService):AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (control.value === '' || control.value === null || control.value === undefined) return of(null)
    return freeTextService.existFreeTextByReference(control.value)
      .pipe(
        map(result => !result ? {freetextNotExist: true} : null));
  }
}
