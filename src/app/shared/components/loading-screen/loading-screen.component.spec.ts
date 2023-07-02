import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync, flush, discardPeriodicTasks } from '@angular/core/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {  AppState } from 'src/app/app.reducer';
import { getIsLoading } from 'src/app/shared/ui.reducer';

import { LoadingScreenComponent } from './loading-screen.component';
import { of } from 'rxjs';
class StoreMock {
  // How we did it before
  select =  jasmine.createSpy().and.returnValue(of({ui:{ isLoading: false },
    screen:{}}));
  dispatch = jasmine.createSpy();
}

fdescribe('LoadingScreenComponent', () => {
  let component: LoadingScreenComponent;
  let fixture: ComponentFixture<LoadingScreenComponent>;
let store: Store<AppState>;
 // let mockStateSelector: MemoizedSelector<AppState, boolean>;
  const initialState = {ui:{ isLoading: false },
                        screen:{}};
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingScreenComponent],
      providers:[
        provideMockStore(),
      //  {
      //    provide: Store,
      //    useClass: StoreMock,
     //   }
      ]
    })
      .compileComponents();
     // mockStateSelector = store.overrideSelector(Co, 'John');
      //fixture.detectChanges();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingScreenComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
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
