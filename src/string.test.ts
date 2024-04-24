import { anything, anything1 } from './string';

describe('String Tests', () => {
  it('should contain "UN"', () => {
    expect(anything).toContain('UN');
  });

  it('should not contain "P"', () => {
    expect(anything).not.toContain('P');
  });

  it('should contain the letter "n"', () => {
    expect(anything1).toContain('n');
  });
});
