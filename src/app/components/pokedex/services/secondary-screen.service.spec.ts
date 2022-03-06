import { TestBed } from '@angular/core/testing';

import { SecondaryScreenService } from './secondary-screen.service';

describe('SecondaryScreenService', () => {
  let service: SecondaryScreenService;
  beforeEach(() => {
    service  = new SecondaryScreenService();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have the msg variable empty o init', () => {
    expect(service.getText()).toBe('');
  });

  it('should setText() must emit text', () => {
    const text = 'text';
    service.setText(text);
    service.textToChange.subscribe( txt => expect(txt).toBe(text));

  });
});
