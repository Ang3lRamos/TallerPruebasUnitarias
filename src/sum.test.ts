import { sum } from './sum';

describe('Sum Tests', () => {
  it('should be greater than 10', () => {
    const result = sum(6, 5);
    expect(result).toBeGreaterThan(10);
  });

  it('should be greater than or equal to 20', () => {
    const result = sum(10, 10);
    expect(result).toBeGreaterThanOrEqual(20);
  });

  it('should be less than or equal to 8', () => {
    const result = sum(3, 5);
    expect(result).toBeLessThanOrEqual(8);
  });

  it('should be less than 12', () => {
    const result = sum(5, 5);
    expect(result).toBeLessThan(12);
  });

  it('should be equal to 9', () => {
    const result = sum(4, 5);
    expect(result).toEqual(9);
  });
});
