import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegionComponent } from './region.component';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('RegionComponent', () => {
  let component: RegionComponent;
  let fixture: ComponentFixture<RegionComponent>;
  let activatedRouteSpy;
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
      declarations: [ RegionComponent ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [ {provide: ActivatedRoute, useValue:  {
        snapshot: {
          paramMap: convertToParamMap({
            id: '1',
            code: 'IBM',
          })
        }
      }},
      { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); }}, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
