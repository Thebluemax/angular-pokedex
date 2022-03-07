import { FormatNamePipe } from './format-name.pipe';

let pipe: FormatNamePipe;

describe('FormatNamePipe', () => {

  beforeEach(() => {
    pipe = new FormatNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Must uppercase word', () => {
    const text = 'pokemon';
    expect(pipe.transform(text, 'T')).toBe(text.toUpperCase());
  })

  it('Must uppercase word and errase dash', () => {
    const text = 'pokemon-dash';
    const textUppercase = 'POKEMON DASH';
    expect(pipe.transform(text, 'T')).toBe(textUppercase);
  })

  it('Must capitalize word and errase dash', () => {
    const text = 'pokemon-dash';
    const textUppercase = 'Pokemon Dash';
    expect(pipe.transform(text, 'I')).toBe(textUppercase);
  })

  it('Must capitalize word', () => {
    const text = 'pokemon';
    const textUppercase = 'Pokemon';
    expect(pipe.transform(text, 'I')).toBe(textUppercase);
  })
});
