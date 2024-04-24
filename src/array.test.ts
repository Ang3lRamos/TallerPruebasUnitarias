import { arrayContainsValue } from './array';

describe('arrayContainsValue', () => {
  it('should return true when the array contains the specified value', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value1';
    expect(arrayContainsValue(arr, value)).toBe(true);
  });

  it('should return true when the array contains the specified value', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value3';
    expect(arrayContainsValue(arr, value)).toBe(true);
  });

  it('should return false when the array does not contain the specified value', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'UNAC';
    expect(arrayContainsValue(arr, value)).toBe(false);
  });
});
