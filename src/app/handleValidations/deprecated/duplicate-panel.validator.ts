import {AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {map} from "rxjs/operators";
import {ComponentService} from "../../services/component.service";

export function duplicatePanelValidator(component: FormGroup) :ValidatorFn {
  //console.log('duplicatePanelValidator executing');
  return (control: AbstractControl): ValidationErrors | null => {
    let result = false;
    for (let i = 0; i < component.value.items.length; i++) {
      if (component.value.items[i] === control.value) result = true;
    }
    //console.log('found panel: ', result);
    if (result) return {'duplicatePanel': true};
    else return null;
  }
}
