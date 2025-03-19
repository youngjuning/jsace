import { binarySearch } from '../binarySearch';

describe('二分搜索算法测试', () => {
  const sortedArr = [2, 5, 8, 12, 16, 23, 38, 56];

  it('目标存在时返回正确索引', () => {
    expect(binarySearch(sortedArr, 23)).toBe(5); // 中间位置
  });

  it('目标不存在时返回-1', () => {
    expect(binarySearch(sortedArr, 10)).toBe(-1); // 不存在元素
  });

  it('目标在数组开头', () => {
    expect(binarySearch(sortedArr, 2)).toBe(0); // 边界测试
  });

  it('目标在数组末尾', () => {
    expect(binarySearch(sortedArr, 56)).toBe(7); // 边界测试
  });

  it('空数组返回-1', () => {
    expect(binarySearch([], 5)).toBe(-1); // 异常输入测试
  });
});
