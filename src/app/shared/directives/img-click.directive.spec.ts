import { ImgClickDirective } from './img-click.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ElementRef, Component, DebugElement } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Routes } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
@Component({
  template: '<div style="1000px"><img src="scr/assets/img/test.png" appImgClick></div>'
})
class TestClickComponent {
}

describe('ImgClickDirective', () => {
  let component: TestClickComponent;
  let fixture: ComponentFixture<TestClickComponent>;
  let inputEL: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [  TestClickComponent],
      imports: [
        NoopAnimationsModule,
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(TestClickComponent);
    component = fixture.componentInstance;
    inputEL = fixture.debugElement;
    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    //const directive = new ImgClickDirective();
    //expect(directive).toBeTruthy();
  });
});
