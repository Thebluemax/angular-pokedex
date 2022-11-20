import { ImgClickDirective } from './img-click.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ElementRef, Component, DebugElement, Renderer2 } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Routes } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
@Component({
  template: '<div><img src="scr/assets/img/test.png" appImgClick></div>'
})
class TestClickComponent {
  open:boolean;
}

describe('ImgClickDirective', () => {
  let component: TestClickComponent;
  let directive: ImgClickDirective;
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
      providers:[
        AnimationBuilder,
        Renderer2
      ]
    });
    fixture = TestBed.createComponent(TestClickComponent);
    component = fixture.componentInstance;
    inputEL = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges(); // initial binding

  });

  it('click launch size', () => {
    //const directive = new ImgClickDirective();
    expect(component.open).toBe(false);
    console.log(inputEL);
    inputEL.triggerEventHandler('click', null);

    fixture.detectChanges();
    console.log(inputEL);

    expect(inputEL.query(By.css('img')).nativeNode.className).toBe('img-open');
  });
});
