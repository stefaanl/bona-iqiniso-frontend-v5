import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {map} from "rxjs/operators";
import {FreeTextService} from "../../services/free-text.service";

export function uniqueFreeTextValidator(freeTextService: FreeTextService):AsyncValidatorFn  {
  return (control: AbstractControl) => {
    //console.log("performing unique alert validation");
    return freeTextService.uniqueFreeTextByReference(control.value)
      .pipe(
        map(result => !result ? {freeTextNotUnique: true} : null ));
  }
}
