import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderScanerComponent } from './header-scaner.component';

describe('HeaderScanerComponent', () => {
  let component: HeaderScanerComponent;
  let fixture: ComponentFixture<HeaderScanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderScanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderScanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
