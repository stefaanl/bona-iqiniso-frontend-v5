import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {map} from "rxjs/operators";
import {NavigationProcessService} from "../../services/navigation-process.service";

export function uniqueNavigationProcessValidator(navigationProcessService: NavigationProcessService):AsyncValidatorFn  {
  return (control: AbstractControl) => {
    //console.log("performing unique alert validation");
    return navigationProcessService.uniqueNavigationProcessByReference(control.value)
      .pipe(
        map(result => !result ? {navigationProcessNotUnique: true} : null ));
  }
}
