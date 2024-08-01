import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {map} from "rxjs/operators";
import {ImageService} from "../../services/image.service";
import {of} from "rxjs";

export function existImageValidator(imageService: ImageService):AsyncValidatorFn  {
  return (control: AbstractControl) => {
    if (control.value === '' || control.value === null || control.value === undefined) return of(null)
    //console.log("performing unique alert validation");
    return imageService.existImageByReference(control.value)
      .pipe(
        map(result => !result ? {imageNotExist: true} : null ));
  }
}
