import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync, flush, discardPeriodicTasks } from '@angular/core/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {  AppState } from 'src/app/app.reducer';
import { getIsLoading } from 'src/app/shared/ui.reducer';

import { LoadingScreenComponent } from './loading-screen.component';
import * as fromUiActions from 'src/app/shared/ui.actions';

describe('LoadingScreenComponent', () => {
  let component: LoadingScreenComponent;
  let fixture: ComponentFixture<LoadingScreenComponent>;
let store: MockStore; //Store<{ ui, screen }>;
 // let mockStateSelector: MemoizedSelector<AppState, boolean>;
  const initialState = {ui:{ isLoading: false },
                        screen:{}};
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingScreenComponent],
      providers:[
        provideMockStore({initialState}),
      ]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingScreenComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  afterEach(() => {
    // Limpiar después de cada prueba
    clearInterval(component.timeOut);
  });
//  beforeEach(() => {
//    store = TestBed.get(Store);
//    fixture = TestBed.createComponent(LoadingScreenComponent);
 ////   component = fixture.debugElement.componentInstance;
  //  mockStateSelector = store.overrideSelector(getIsLoading, false); // Configura el selector de estado correspondiente
   // fixture.detectChanges();
  //});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set loadMsj correctly when loading is true', fakeAsync(() => {
    component.activeLoading();
    store.dispatch(fromUiActions.isLoading());
    component.loading = true;
    expect(component.loading).toBe(true);
    tick(100);
    expect(component.loadMsj).toBe('* ');

    clearInterval(component.timeOut);
  }));

  it('should set loadMsj correctly when loading is false', fakeAsync(() => {
    component.loading = false;
    component.activeLoading();
    store.dispatch(fromUiActions.stopLoading());
    expect(component.loading).toBe(false);
    tick(100);
    expect(component.loadMsj).toBe('');

    clearInterval(component.timeOut);
  }));

});
