import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BodydexComponent } from './bodydex.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PokebaseService } from 'src/app/core/services/pokebase.service';
import { LoadingScreenComponent } from '@components/loading-screen/loading-screen.component';

describe('BodydexComponent', () => {
  let component: BodydexComponent;
  let fixture: ComponentFixture<BodydexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BodydexComponent,
      LoadingScreenComponent
      ],
      imports: [RouterTestingModule,
      HttpClientModule],
      providers: [PokebaseService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodydexComponent);

    component = fixture.componentInstance;
    component.pageName = 'text';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
