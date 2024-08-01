
import { Directive, Self, HostListener } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Directive({
  selector: 'form[formGroup]'
})
export class MarkFormTouchedDirective {
  @HostListener('submit')
  onSubmit() {
    //console.log('form to be touched:', this.container.control)
    if (this.container.control) this.container.control.markAllAsTouched();
  }

  constructor(@Self() private container: ControlContainer) {
  }
}
