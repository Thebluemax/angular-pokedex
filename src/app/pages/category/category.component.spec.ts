import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseServiceStub } from "src/app/stubs/base-service.stub";
import { CategoryComponent } from './category.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PokebaseService } from 'src/app/core/services/pokebase.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let store;
  const initialState = {
    screen:{ message: 'test' },
    ui:{ isLoading: false }
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ CategoryComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [  provideMockStore({initialState}),
        {provide: ActivatedRoute, useValue:  {
        snapshot: {
          paramMap: convertToParamMap({
            id: 2,
            code: 'IBM',
          })
        }
      }},{
        provide: PokebaseService,
        useClase: BaseServiceStub
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
