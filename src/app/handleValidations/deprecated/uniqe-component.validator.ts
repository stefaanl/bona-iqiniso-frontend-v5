import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {map} from "rxjs/operators";
import {ComponentService} from "../../services/component.service";

export function uniqueComponentValidator(componentService: ComponentService):AsyncValidatorFn  {
  return (control: AbstractControl) => {
    //console.log("performing unique component validation");
    return componentService.uniqueComponentByReference(control.value)
      .pipe(
        map(result => !result ? {componentNotUnique: true} : null ));
  }
}
