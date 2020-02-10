import { Directive, HostListener,Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private renderer: Renderer2, private el:ElementRef) { }
  @HostListener('mouseover', ['$event.target.id']) overElement(id: string) {
    this.renderer.addClass(this.el.nativeElement.querySelector('#'+id), 'highlighted');
    console.log(this.el.nativeElement);
  }
  @HostListener('mouseout', ['$event.target.id']) outElement(id: any) {
    this.renderer.removeClass(this.el.nativeElement.querySelector('#'+id), 'highlighted');
      console.log(this.el.nativeElement.querySelector('#'+id));
  }
}
