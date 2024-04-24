import { arrayContainsValue, arrayNotContainsValue } from './array';

describe('arrayContainsValue', () => {
  it('should return true if array contains the value "value1"', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value1';
    expect(arrayContainsValue(arr, value)).toBe(true);
  });

  it('should return true if array contains the value "value3"', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value3';
    expect(arrayContainsValue(arr, value)).toBe(true);
  });

  it('should return false if array does not contain the value "UNAC"', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'UNAC';
    expect(arrayContainsValue(arr, value)).toBe(false);
  });
});

describe('arrayNotContainsValue', () => {
  it('should return false if array contains the value "value1"', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value1';
    expect(arrayNotContainsValue(arr, value)).toBe(false);
  });

  it('should return false if array contains the value "value3"', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'value3';
    expect(arrayNotContainsValue(arr, value)).toBe(false);
  });

  it('should return true if array does not contain the value "UNAC"', () => {
    const arr = ['value1', 'value2', 'value3'];
    const value = 'UNAC';
    expect(arrayNotContainsValue(arr, value)).toBe(true);
  });
});
