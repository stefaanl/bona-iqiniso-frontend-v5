import {AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {map} from "rxjs/operators";
import {ComponentService} from "../../services/component.service";

export function duplicateLabelValidator(component: FormGroup) :ValidatorFn {
  //console.log('duplicateLabelValidator executing');
  return (control: AbstractControl): ValidationErrors | null => {
    //console.log('label: ', control.value);
    //console.log('component: ', component.value);

    //console.log('list labels: ', component.value.labels);
    let result = false;
    for (let i = 0; i < component.value.labels.length; i++) {
      if (component.value.labels[i].label.label === control.value) result = true;
    }
      //console.log('found label: ', result);
    if (result) return {'duplicateLabel': true};
    else return null;
  }
}
