import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LocationComponent } from './location.component';
import { PokebaseService } from '@services/pokebase.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormatNamePipe } from '@pipes/format-name.pipe';
import { SecondaryScreenService } from '@services/secondary-screen.service';
import { ActivatedRoute } from '@angular/router';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationComponent,
      FormatNamePipe ],
      imports: [HttpClientModule,
      RouterTestingModule],
      providers:[PokebaseService, SecondaryScreenService,
        , {
          provide: ActivatedRoute,
          useValue: {snapshot: {paramMap: {get():any{ return  {id:'pikachu'}}}}}
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
