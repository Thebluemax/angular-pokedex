import { Directive, HostListener,Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private renderer: Renderer2, private el:ElementRef) { }
  @HostListener('mouseover', ['$event.target.id']) over(id: string) {
    this.renderer.setStyle(this.el.nativeElement.querySelector('#'+id), 'background', 'skyblue');
    console.log(this.el.nativeElement);
  }
  @HostListener('mouseout', ['$event.target.id']) outElement(id: any) {
    this.renderer.setStyle(this.el.nativeElement.querySelector('#'+id), 'background', 'none');
      console.log(this.el.nativeElement.querySelector('#'+id));
  }
}
