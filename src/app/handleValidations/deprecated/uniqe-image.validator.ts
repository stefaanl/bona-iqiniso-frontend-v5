import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {map} from "rxjs/operators";
import {ImageService} from "../../services/image.service";

export function uniqueImageValidator(imageService: ImageService):AsyncValidatorFn  {
  return (control: AbstractControl) => {
    //console.log("performing unique alert validation");
    return imageService.uniqueImageByReference(control.value)
      .pipe(
        map(result => !result ? {imageNotUnique: true} : null ));
  }
}
