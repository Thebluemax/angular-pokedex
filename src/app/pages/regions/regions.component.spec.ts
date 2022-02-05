import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegionsComponent } from './regions.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class RouterMock {

  navigateByUrl(url: string) {
    return url;
  }

  serializeUrl(url: string) {
     return url;
  }

  // Dummy further methods here if required

}

describe('RegionsComponent', () => {
  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;
  let component: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      schemas:      [NO_ERRORS_SCHEMA],
      declarations: [ RegionsComponent ],
      providers: [
        {provide: Router, useClass: RouterMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
