import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {map} from "rxjs/operators";
import {PanelService} from "../../services/panel.service";

export function uniquePanelValidator(panelService: PanelService):AsyncValidatorFn  {
  return (control: AbstractControl) => {
    //console.log("performing unique component validation");
    return panelService.uniquePanelByReference(control.value)
      .pipe(
        map(result => !result ? {panelNotUnique: true} : null ));
  }
}
