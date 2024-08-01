import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {map} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {PanelService} from "../../services/panel.service";

export function existPanelValidator(panelService: PanelService):AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    //console.log("existPanelValidator:", control.value);
    if (control.value === '' || control.value === null || control.value === undefined) return of(null)
    return panelService.existPanelByReference(control.value)
      .pipe(
        map(result => !result ? {panelNotExist: true} : null));
  }
}
