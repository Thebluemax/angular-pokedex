import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegionComponent } from './region.component';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { FormatNamePipe } from 'src/app/shared/pipes/format-name.pipe';


describe('RegionComponent', () => {
  let component: RegionComponent;
  let fixture: ComponentFixture<RegionComponent>;
  let activatedRouteSpy;
  let store;
  const initialState = {
    screen:{ message: 'test' },
    ui:{ isLoading: false }
  };
  beforeEach(waitForAsync(() => {
    activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({
          id: '1',
          code: 'IBM',
        })
      }
    };

    TestBed.configureTestingModule({
      declarations: [ RegionComponent,
      FormatNamePipe ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        provideMockStore({initialState}),
        {provide: ActivatedRoute, useValue:  {
        snapshot: {
          paramMap: convertToParamMap({
            id: '1',
            code: 'IBM',
          })
        }
      }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionComponent);
    component = fixture.componentInstance;
    component.region = { name: 'johto', id: 1, locations: [] };
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
