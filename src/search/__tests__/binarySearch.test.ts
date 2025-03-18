import { binarySearch } from '../binarySearch';

describe('binarySearch', () => {
  it('should return the index of the target element（左半区）', () => {
    const arr = [1, 3, 5, 7, 9];
    const target = 1;
    const result = binarySearch(arr, target);
    expect(result).toBe(0);
  });

  it('should return the index of the target element（右半区）', () => {
    const arr = [1, 3, 5, 7, 9];
    const target = 7;
    const result = binarySearch(arr, target);
    expect(result).toBe(3);
  });

  it('should not return -1', () => {
    const arr = [1, 3, 5, 7, 9];
    const target = 2;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });
});
