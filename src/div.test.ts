import { div } from './div';

describe('div', () => {
  it('should return the correct result for a valid division', () => {
    const result = div(10, 2);
    expect(result).toEqual(5);
  });

  it('should throw an error for division by zero', () => {
    expect(() => {
      div(10, 0);
    }).toThrow('Division by zero');
  });
});

