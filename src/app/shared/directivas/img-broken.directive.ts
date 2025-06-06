import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  @Input() customImg: string = 'https://images.app.goo.gl/inmcpA6noQiwSbbn8';
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    console.log('😡Esta imagen revento -->', this.elHost);

    elNative.src = '../../../../assets/images/img-broken.jpg';
  }

  constructor(private elHost: ElementRef) {}
}
