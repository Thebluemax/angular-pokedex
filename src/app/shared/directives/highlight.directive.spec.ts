import { HighlightDirective } from './highlight.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, DebugElement } from '@angular/core';
import { BerryComponent } from '@pages/berry/berry.component';
import { By } from '@angular/platform-browser';
import { debug } from 'console';
@Component({
  template: '<ul appHighlight><li class="higtlight" id="item-0">test</li><ul>'
})
class TestHoverFocusComponent {
}

describe('HighlightDirective', () => {
  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let inputEL: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [  TestHoverFocusComponent, HighlightDirective ],
    });
    fixture = TestBed.createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;
    inputEL = fixture.debugElement;
    fixture.detectChanges(); // initial binding
  });

  it('instance created', () => {
    expect(fixture).toBeTruthy;
  })

  it('in out mouse highlight', () => {
    //const directive = new HighlightDirective();
    inputEL.triggerEventHandler('mouseover',null);
    fixture.detectChanges();
    expect(inputEL.query(By.css('li')).nativeElement.className).toBe('higtlight');

  inputEL.triggerEventHandler('mouseout', null);
  fixture.detectChanges();
  expect(inputEL.nativeElement.style.backgroundColor).toBe('');

  inputEL.triggerEventHandler('mouseover',null);
  fixture.detectChanges();
  console.debug(inputEL.query(By.css('li')).nativeElement.className)
  expect(inputEL.query(By.css('li')).nativeElement.className).toBe('higtlight');

  });
});
