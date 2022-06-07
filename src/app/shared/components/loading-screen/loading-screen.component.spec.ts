import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync, flush, discardPeriodicTasks } from '@angular/core/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as appStates from 'src/app/app.reducer';

import { LoadingScreenComponent } from './loading-screen.component';

describe('LoadingScreenComponent', () => {
  let component: LoadingScreenComponent;
  let fixture: ComponentFixture<LoadingScreenComponent>;
  let store: MockStore<appStates.AppState>;
  let mockStateSelector: MemoizedSelector<appStates.AppState, string>;
  const initialState = {ui:{ isLoading: false },
                        screen:{}};
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingScreenComponent],
      imports:[

      ],
      providers:[
        provideMockStore(),
      ]
    })
      .compileComponents();
     // mockStateSelector = store.overrideSelector(appStates, 'John');
//      fixture.detectChanges();
  }));

  beforeEach(() => {
    store = TestBed.get<Store>(Store);
    fixture = TestBed.createComponent(LoadingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
