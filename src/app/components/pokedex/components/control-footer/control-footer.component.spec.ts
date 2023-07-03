import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ControlFooterComponent } from './control-footer.component';
import { SecondaryScreenService } from 'src/app/components/pokedex/services/secondary-screen.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { provideMockStore } from '@ngrx/store/testing';
import { getMessage } from 'src/app/components/pokedex/components/control-footer/redux/screen.reducer';
describe('ControlFooterComponent', () => {
  let component: ControlFooterComponent;
  let fixture: ComponentFixture<ControlFooterComponent>;
  let store: Store<AppState>;
  // let mockStateSelector: MemoizedSelector<AppState, boolean>;
   const initialState = {screen:{ message: 'test' },
                         ui:{ isLoading: false }};
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ ControlFooterComponent ],
      providers: [provideMockStore(),
        SecondaryScreenService]
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
