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

  it('Must change to plural the word with y', () => {
    const text = 'berry';
    const textPlural = 'berries';
    expect(pipe.transform(text, 'P')).toBe(textPlural);
  })

  it('Must change to plural the word with n', () => {
    const text = 'pokemon';
    const textPlural = 'pokemons';
    expect(pipe.transform(text, 'P')).toBe(textPlural);
  })

  it('Default value is the string', () => {
    const text = 'pokemon';
    expect(pipe.transform(text, 'X')).toBe(text);
  });

});
