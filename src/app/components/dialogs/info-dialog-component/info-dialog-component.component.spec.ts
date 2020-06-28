import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDialogComponentComponent } from './info-dialog-component.component';

describe('InfoDialogComponentComponent', () => {
  let component: InfoDialogComponentComponent;
  let fixture: ComponentFixture<InfoDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
