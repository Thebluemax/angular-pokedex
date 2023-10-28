import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { PipeCustomModule } from '../../pipes/pipe-custom.module';

fdescribe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [PipeCustomModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#pageName should be Page Name', () => { 
    let pageName = 'Page Name';
    component.pageName = pageName;
    fixture.detectChanges();

    const title = fixture.nativeElement.querySelector('h6');
    let transformText = `/${pageName.toUpperCase()}`;
    expect(title.innerHTML).toBe(transformText);
  });
});
