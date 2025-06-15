import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BodydexComponent } from './bodydex.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PokebaseService } from 'src/app/core/services/pokebase.service';
import { LoadingScreenComponent } from 'src/app/shared/components/loading-screen/loading-screen.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FormatNamePipe } from 'src/app/shared/pipes/format-name.pipe';
import { PokemonServiceStub } from 'src/app/stubs/pk-service.stub';

describe('BodydexComponent', () => {
  let component: BodydexComponent;
  let fixture: ComponentFixture<BodydexComponent>;
  let store: MockStore;
  let pokeServiceSpy: jasmine.SpyObj<PokebaseService>;
   const initialState = {screen:{ message: 'test' },
                         ui:{ isLoading: false }};
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ BodydexComponent,
      LoadingScreenComponent,
      FormatNamePipe
      ],
      imports: [RouterTestingModule,
      HttpClientModule],
      providers: [{provide:PokebaseService,
         useClass: PokemonServiceStub},
         provideMockStore({initialState})]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodydexComponent);

    component = fixture.componentInstance;
    component.pageName = 'text';
    component.api = 'pokemon';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should order list', () => {
    component.list= [{name:'r'},{name:'b'}, {name:'h'}]
    component.listSort()
    expect(component.list[0].name).toBe('b');
  });
  

  it('previous page', () => {
    const spy = spyOn(component, 'buildList');
    console.log(component.list);
    component.page = 2;
    component.previousPage();
    expect(component.page).toBe(1);
    expect(spy).toHaveBeenCalledWith(component.page);
  });

  it('next page when no more pages', () => {
    const spy = spyOn(component, 'buildList');
    component.page = 1;
    component.nextPage();
    expect(component.page).toBe(1);
    expect(spy).toHaveBeenCalledWith(component.page);
  });

  it('next page', () => {
    const spy = spyOn(component, 'buildList');
    component.page = 1;
    component.itemCount = 30;
    component.rows = 10;
    component.nextPage();
    expect(component.page).toBe(2);
    expect(spy).toHaveBeenCalledWith(component.page);
  });
});
