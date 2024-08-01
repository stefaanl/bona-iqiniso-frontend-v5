import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {map} from "rxjs/operators";
import {LabelService} from "../../services/label.service";

export function uniqueLabelValidator(labelService: LabelService):AsyncValidatorFn  {
  return (control: AbstractControl) => {
    //console.log("performing unique alert validation");
    return labelService.uniqueLabelByReference(control.value)
      .pipe(
        map(result => !result ? {labelNotUnique: true} : null ));
  }
}
