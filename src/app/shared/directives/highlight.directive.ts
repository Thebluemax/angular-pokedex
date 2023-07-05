import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  @HostListener('mouseover', ['$event.target.id']) overElement(id: string) {
    let element = (id !== "") ? "#" + id : null;
    if (element != null) {
      this.renderer.addClass(this.el.nativeElement.querySelector(element), 'highlighted');
    }
  }
  @HostListener('mouseout', ['$event.target.id']) outElement(id: any) {
    let element = (id !== "") ? "#" + id : null;;
    if (element != null) {
      this.renderer.removeClass(this.el.nativeElement.querySelector(element), 'highlighted');
    }
  }
}
