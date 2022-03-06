import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ControlFooterComponent } from './control-footer.component';
import { SecondaryScreenService } from 'src/app/core/services/secondary-screen.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ControlFooterComponent', () => {
  let component: ControlFooterComponent;
  let fixture: ComponentFixture<ControlFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ ControlFooterComponent ],
      providers: [SecondaryScreenService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
