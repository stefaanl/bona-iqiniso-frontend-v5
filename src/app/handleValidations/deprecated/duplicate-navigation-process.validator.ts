import {AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {NavigationProcessService} from "../../services/navigation-process.service";


export function duplicateNavigationProcessValidator(component: FormGroup) :ValidatorFn {
  //console.log('duplicateAlertValidator executing');
  return (control: AbstractControl): ValidationErrors | null => {
    //console.log('alert: ', control.value);
    //console.log('component: ', component.value);

    //console.log('list alerts: ', component.value.alerts);
    let result = false;
    for (let i = 0; i < component.value.alerts.length; i++) {
      if (component.value.alerts[i].alert.alert === control.value) result = true;
    }
      //console.log('found alert: ', result);
    if (result) return {'duplicateNavigationProcess': true};
    else return null;
  }
}
