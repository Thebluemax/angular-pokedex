import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrincipalScreenComponent } from './principal-screen.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('PrincipalScrenComponent', () => {
  let component: PrincipalScreenComponent;
  let fixture: ComponentFixture<PrincipalScreenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],

      declarations: [ PrincipalScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
