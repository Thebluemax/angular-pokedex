import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InfoDialogComponent } from './info-dialog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { PokebaseService } from 'src/app/core/services/pokebase.service';

describe('InfoDialogComponentComponent', () => {
  let component: InfoDialogComponent;
  let fixture: ComponentFixture<InfoDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDialogComponent ],
      imports: [RouterTestingModule,
      HttpClientModule],
      providers: [PokebaseService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
