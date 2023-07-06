import { ImgClickDirective } from './img-click.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement, Renderer2 } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
@Component({
  template: '<div><img appImgClick class="" src="scr/assets/img/test.png" ></div>'
})
class TestClickComponent {
  open: boolean;
}

describe('ImgClickDirective', () => {
  let component: TestClickComponent;
  let fixture: ComponentFixture<TestClickComponent>;
  let inputEL: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestClickComponent,
        ImgClickDirective
      ],
      imports: [
        NoopAnimationsModule,
      ],
      providers: [

        Renderer2,
        ImgClickDirective,
      ]
    });
    fixture = TestBed.createComponent(TestClickComponent);
    component = fixture.componentInstance;
    inputEL = fixture.debugElement.query(By.css('img'));;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click launch size', async () => {
    component.open = false;
    expect(component.open).toBe(false);
    inputEL.nativeElement.dispatchEvent(new Event('click'));
    component.open = true;
    fixture.detectChanges();
    await fixture.whenStable();
    await expect(inputEL.nativeElement.className).toBe('img-open');
  });
});
