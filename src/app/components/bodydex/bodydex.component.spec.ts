import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodydexComponent } from './bodydex.component';

describe('BodydexComponent', () => {
  let component: BodydexComponent;
  let fixture: ComponentFixture<BodydexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodydexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodydexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
