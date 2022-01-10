import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appInsriptionDisabledDirective]'
})
export class InsriptionDisabledDirectiveDirective {
  @HostBinding('class.link-is-disabled') 
  status: boolean | undefined;
  @Input()
  set appInscriptionDisabled(value: boolean) {
    this.status = value;
  }
  constructor() { }

}
