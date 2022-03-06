import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PrincipalScreenComponent } from '@components/pokedex/principal-screen/principal-screen.component';
import { HeaderScanerComponent } from '@components/pokedex/header-scaner/header-scaner.component';
import { ControlFooterComponent } from '@components/control-footer/control-footer.component';

describe('AppComponent', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [
        AppComponent,
        HeaderScanerComponent,
        PrincipalScreenComponent,
        ControlFooterComponent

      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title poke', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('poke');
  });

  it('should render title', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement;
    let element = compiled.querySelector('#main');
    expect(element.getAttribute('id')).toMatch(/main/);
    done()
  });
});
