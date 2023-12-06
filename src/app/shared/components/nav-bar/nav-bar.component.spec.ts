import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PipeCustomModule } from './../../pipes/pipe-custom.module';
import { FormatNamePipe } from '../../pipes/format-name.pipe';
import { MesurePipe } from '../../pipes/mesure.pipe';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormatNamePipe,
        NavBarComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
