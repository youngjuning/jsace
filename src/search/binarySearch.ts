export const binarySearch = (arr: number[], target: number) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2); // 避免整数溢出
    if (arr[mid] === target) {
      return mid; // 找到目标
    } else if (arr[mid] < target) {
      left = mid + 1; // 搜索右半区
    } else {
      right = mid - 1; // 搜索左半区
    }
  }
  return -1; // 未找到
};
