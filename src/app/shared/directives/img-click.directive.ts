import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';
import {
  AnimationPlayer,
   AnimationMetadata,
   AnimationBuilder ,
   animate,
  style
} from '@angular/animations';

@Directive({
  selector: '[appImgClick]'
})
export class ImgClickDirective {
  big: boolean = false;
  
  player: AnimationPlayer | undefined;

  constructor(
    private builder: AnimationBuilder,
    private render: Renderer2,
    private element : ElementRef
  ) { }

  @HostListener('click',['$event.target']) onClick(img: any) {
    if (this.player) {
      this.player.destroy();
    }
    const metadata = !this.big ? this.inResizeOut() : this.inResizeIn();
    if (this.big) {
      this.render.removeClass(this.element.nativeElement, 'img-open')
    } else {
      this.render.addClass(this.element.nativeElement, 'img-open')
    }
    const factory = this.builder.build(metadata);
    this.player = factory.create(this.element.nativeElement);

    this.player.play();
    this.big = !this.big;
  }

  private inResizeOut(): AnimationMetadata[] {
    return [
      style({ width: '25%',
              backgroundColor: 'chartreuse' }),
      animate('400ms ease-in', style({ width: '95%' ,
              backgroundColor: 'white'})),
    ];
  }

  private inResizeIn(): AnimationMetadata[] {
    return [
      style({ width: '95%',
      backgroundColor: 'white' }),
      animate('400ms ease-in', style({ width: '25%',
      backgroundColor: 'chartreuse' })),
    ];
  }

}
