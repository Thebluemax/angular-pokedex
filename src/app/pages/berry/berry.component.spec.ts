import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BerryComponent } from './berry.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { PokebaseService } from '@services/pokebase.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('BerryComponent', () => {
  let component: BerryComponent;
  let fixture: ComponentFixture<BerryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BerryComponent ],
      imports:[RouterTestingModule, HttpClientModule],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers:[PokebaseService,
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {paramMap: {get():any{ return  {id:'pikachu'}}}}}
        }]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerryComponent);
    component = fixture.componentInstance;
    component.title = 'test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
