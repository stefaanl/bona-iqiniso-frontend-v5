import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function duplicateStringValidator(ob: any) :ValidatorFn {
  //console.log('duplicatePanelValidator executing');
  return (control: AbstractControl): ValidationErrors | null => {
    let result = false;
    //console.log('duplicate string - stringlist: ',ob.items);
    //console.log('duplicate string: ',ob.items.includes(control.value));
    if (ob.items.includes(control.value)) result = true;
    if (result) return {'duplicatePanel': true};
    else return null;
  }
}
