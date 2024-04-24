import { n, number, notTrue, notFalse } from './multi';

describe('Multi', () => {
  it('should be null', () => {
    expect(n).toBeNull();
  });

  it('should be defined (not undefined)', () => {
    expect(n).toBeDefined();
  });

  it('should be equal to 0', () => {
    expect(number).toEqual(0);
  });

  it('should be false', () => {
    expect(notTrue).toBe(false);
  });

  it('should be true', () => {
    expect(notFalse).toBe(true);
  });
});
