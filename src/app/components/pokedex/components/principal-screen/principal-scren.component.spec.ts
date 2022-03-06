import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrincipalScreenComponent } from './principal-screen.component';

describe('PrincipalScrenComponent', () => {
  let component: PrincipalScreenComponent;
  let fixture: ComponentFixture<PrincipalScreenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
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
