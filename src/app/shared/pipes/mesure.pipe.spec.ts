import { MesurePipe } from './mesure.pipe';

describe('MesurePipe', () => {
  let pipe: MesurePipe;
  beforeEach(() => {
    pipe = new MesurePipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Must return a mts string', () => {
    const value  = 9;
    expect(pipe.transform(value,'')).toBe('0.9 mts.')
  });

  it('Must return a kg string', () => {
    const value  = 9;
    expect(pipe.transform(value,'k')).toBe('0.9 kg.')
  })

  it('Must return a kg string from a string input', () => {
    const value  = '09';
    expect(pipe.transform(value,'k')).toBe('0.9 kg.')
  })
});
