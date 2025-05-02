import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img [appDirectives]'
})
export class DirectivasDirective {
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('😡Esta imagen reventó', this.elHost);
    elNative.src = '../../../../assets/images/img-broken.jpg';

  }
  constructor(private elHost: ElementRef) { }


}
