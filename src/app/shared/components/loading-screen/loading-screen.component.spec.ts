import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync, flush, discardPeriodicTasks } from '@angular/core/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {  AppState } from 'src/app/app.reducer';
import { getIsLoading } from 'src/app/shared/ui.reducer';

import { LoadingScreenComponent } from './loading-screen.component';

fdescribe('LoadingScreenComponent', () => {
  let component: LoadingScreenComponent;
  let fixture: ComponentFixture<LoadingScreenComponent>;
  let store: MockStore<AppState>;
  let mockStateSelector: MemoizedSelector<AppState, boolean>;
  const initialState = {ui:{ isLoading: false },
                        screen:{}};
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingScreenComponent],
      imports:[

      ],
      providers:[

        provideMockStore({ initialState }),
      ]
    })
      .compileComponents();
     // mockStateSelector = store.overrideSelector(appStates, 'John');
//      fixture.detectChanges();
  }));

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(LoadingScreenComponent);
    component = fixture.componentInstance;
    mockStateSelector = store.overrideSelector(getIsLoading, false); // Configura el selector de estado correspondiente
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeFalsy();
  });

  it('Must write msj', fakeAsync(() => {
    console.log(component.timeOut);

    expect(component.loading).toBeFalsy();
    component.loading = true;
    component.ngOnInit();
    expect(component.loadMsj).toBe('');
    expect(component.loading).toBe(true);
    tick(100)
    fixture.detectChanges();

    expect(component.loadMsj).toBe('* ');
    component.loading = false;
    expect(component.loading).toBe(false);
    tick(100)
    tick(100)
    fixture.detectChanges();

    expect(component.loadMsj).toBe('');
    discardPeriodicTasks()
  }));

});
