import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {map} from "rxjs/operators";
import {NavigationComponentService} from "../../services/navigation-component.service";

export function uniqueNavigationComponentValidator(navigationComponentService: NavigationComponentService):AsyncValidatorFn  {
  return (control: AbstractControl) => {
    //console.log("performing unique navigation component validation");
    return navigationComponentService.uniqueNavigationComponentByReference(control.value)
      .pipe(
        map(result => !result ? {navigationComponentNotUnique: true} : null ));
  }
}
