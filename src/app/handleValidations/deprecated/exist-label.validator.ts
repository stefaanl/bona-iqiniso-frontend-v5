import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {map} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {LabelService} from "../../services/label.service";

export function existLabelValidator(labelService: LabelService):AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (control.value === '' || control.value === null || control.value === undefined) return of(null)
    return labelService.existLabelByReference(control.value)
      .pipe(
        map(result => !result ? {labelNotExist: true} : null));
  }
}
