import { ComponentFixture, TestBed, fakeAsync, waitForAsync } from '@angular/core/testing';

import { ControlFooterComponent } from './control-footer.component';
import { SecondaryScreenService } from 'src/app/components/pokedex/services/secondary-screen.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromScreenActions from 'src/app/components/pokedex/components/control-footer/redux/screen.actions';
describe('ControlFooterComponent', () => {

  let component: ControlFooterComponent;
  let fixture: ComponentFixture<ControlFooterComponent>;
  let store;
  // let mockStateSelector: MemoizedSelector<AppState, boolean>;
   const initialState = {screen:{ message: 'test' },
                         ui:{ isLoading: false }};
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ ControlFooterComponent ],
      providers: [provideMockStore({initialState}),
        SecondaryScreenService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlFooterComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Must write initial message in the footer', fakeAsync(() => {
  expect(component.screenSecondary).toEqual('-- --');
  component.ngOnInit();
  fixture.detectChanges();
  store.setState({screen:{ message: 'Menú Pokedex' },
  ui:{ isLoading: false }});
  expect(component.screenSecondary).toEqual('Menú Pokedex');
}));

it('must call back() method in _location', () => {
  spyOn( component.location, 'back');
  component.goBack();
  expect(component.location.back).toHaveBeenCalled();
});

it('must call forward() method in _location', () => {
  spyOn( component.location, 'forward');
  component.goForward();
  expect(component.location.forward).toHaveBeenCalled();
});
});
