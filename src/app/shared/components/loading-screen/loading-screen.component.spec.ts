import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync, flush, discardPeriodicTasks } from '@angular/core/testing';

import { LoadingScreenComponent } from './loading-screen.component';

describe('LoadingScreenComponent', () => {
  let component: LoadingScreenComponent;
  let fixture: ComponentFixture<LoadingScreenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingScreenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
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
