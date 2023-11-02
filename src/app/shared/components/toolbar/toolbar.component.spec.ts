import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { PipeCustomModule } from '../../pipes/pipe-custom.module';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [PipeCustomModule, RouterTestingModule]
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

  it('should show input', () => {
    const inputHidde = fixture.nativeElement.querySelector('input');
    expect(inputHidde).toBeFalsy();
    component.openInput = true;
    fixture.detectChanges();
    const inputShow = fixture.nativeElement.querySelector('input');
    expect(inputShow).toBeTruthy();
  });

  it('openSearch method show input', () => {
    const inputHidde = fixture.nativeElement.querySelector('input');
    expect(inputHidde).toBeFalsy();
    component.openSearch();
    fixture.detectChanges();
    const inputShow = fixture.nativeElement.querySelector('input');
    expect(inputShow).toBeTruthy();
  });

  it('click search buttom call openSearch', () => {
      spyOn(component, 'openSearch');
      const button = fixture.nativeElement.querySelector('a#search-btn');
      button.click();
      expect(component.openSearch).toHaveBeenCalled();
  });

  it('write in input call searchTermAction', () => {
      spyOn(component, 'searchTermAction');
      component.openInput = true;
      fixture.detectChanges();
      const input = fixture.nativeElement.querySelector('input');
      input.dispatchEvent(new Event('keyup',{} ));
      fixture.detectChanges();
      expect(component.searchTermAction).toHaveBeenCalled();
  });

  it('write in input dispach event emmitter with string', () => {
      spyOn(component.searchTerm, 'emit');
      component.openInput = true;
      fixture.detectChanges();
      const input = fixture.debugElement.query(By.css('input'));
      input.nativeElement.value = 'test';
      input.triggerEventHandler('keyup',{target: input.nativeElement});
      fixture.detectChanges();
      expect(component.searchTerm.emit).toHaveBeenCalledWith('test');
  });
});
