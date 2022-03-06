import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LocationComponent } from './location.component';
import { PokebaseService } from 'src/app/core/services/pokebase.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormatNamePipe } from 'src/app/shared/pipes/format-name.pipe';
import { SecondaryScreenService } from 'src/app/core/services/secondary-screen.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { BodydexComponent } from '@components/pokedex/components/bodydex/bodydex.component';
import { LoadingScreenComponent } from 'src/app/shared/components/loading-screen/loading-screen.component';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(waitForAsync(() => {
    const locationStub = {
      back: jasmine.createSpy('back')
  }
    TestBed.configureTestingModule({
      declarations: [LocationComponent,
        FormatNamePipe,
        BodydexComponent,
        LoadingScreenComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule],
      providers: [
        {provide: ActivatedRoute, useValue:  {
          snapshot: {
            paramMap: convertToParamMap({
              id: 2,
              code: 'IBM',
            })
          }
        }},
        PokebaseService,
        SecondaryScreenService,

      ]
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
