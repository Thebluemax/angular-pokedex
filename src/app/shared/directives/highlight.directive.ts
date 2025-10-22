import { Directive, HostListener, Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy {
  private items: HTMLElement[] = [];
  private currentIndex: number = -1;
  private navigationHandler = (e: any) => this.onNavigate(e);

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    const nodeList = this.el.nativeElement.querySelectorAll('.higtlight, li');
    this.items = Array.from(nodeList) as HTMLElement[];
    this.items.forEach((it, idx) => {
      if (!it.id) {
        it.id = `item-${idx}`;
      }
    });
    window.addEventListener('pokedex-navigate', this.navigationHandler as EventListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('pokedex-navigate', this.navigationHandler as EventListener);
  }

  @HostListener('mouseover', ['$event.target']) overElement(target: HTMLElement) {
    const el = this.findItemFromTarget(target);
    if (el) {
      this.clearCurrentHighlight();
      this.currentIndex = this.items.indexOf(el);
      this.renderer.addClass(el, 'highlighted');
    }
  }

  @HostListener('mouseout', ['$event.target']) outElement(target: HTMLElement) {
    const el = this.findItemFromTarget(target);
    if (el) {
      this.renderer.removeClass(el, 'highlighted');
      if (this.currentIndex === this.items.indexOf(el)) {
        this.currentIndex = -1;
      }
    }
  }

  private findItemFromTarget(target: HTMLElement): HTMLElement | null {
    if (!target) return null;
    if (this.items.indexOf(target) !== -1) return target;
    let el: HTMLElement | null = target;
    while (el && el !== this.el.nativeElement) {
      if (this.items.indexOf(el) !== -1) return el;
      el = el.parentElement;
    }
    return null;
  }

  private clearCurrentHighlight() {
    if (this.currentIndex >= 0 && this.items[this.currentIndex]) {
      this.renderer.removeClass(this.items[this.currentIndex], 'highlighted');
    }
  }

  private onNavigate(event: any) {
    const direction = event && event.detail && event.detail.direction;
    if (!direction || this.items.length === 0) return;
    if (this.currentIndex === -1) {
      this.currentIndex = 0;
      this.renderer.addClass(this.items[this.currentIndex], 'highlighted');
      return;
    }
    this.clearCurrentHighlight();
    if (direction === 'up') {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    } else if (direction === 'down') {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }
    const el = this.items[this.currentIndex];
    if (el) {
      this.renderer.addClass(el, 'highlighted');
      setTimeout(() => el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }), 0);
    }
  }
}
