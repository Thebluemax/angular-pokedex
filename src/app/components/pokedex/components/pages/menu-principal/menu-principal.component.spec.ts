import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuPrincipalComponent } from './menu-principal.component';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuPrincipalComponent', () => {
  let component: MenuPrincipalComponent;
  let fixture: ComponentFixture<MenuPrincipalComponent>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPrincipalComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ ],
      imports:[
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrincipalComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /pokedex/item', () => {
    const spy = spyOn(router, 'navigate');
    component.goto({target:{attributes:{position:{value:0}}}});
    expect(spy).toHaveBeenCalledWith(['pokedex/item']);
  });

  it('should navigate to /pokedex/berry', () => {
    const spy = spyOn(router, 'navigate');
    component.goto({target:{attributes:{position:{value:3}}}});
    expect(spy).toHaveBeenCalledWith(['pokedex/berry']);
  });

  it('should not navigate if index out of bounds', () => {
    const spy = spyOn(router, 'navigate');
    component.goto({target:{attributes:{position:{value:7}}}});
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
