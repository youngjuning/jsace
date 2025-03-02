import { LinkedList } from '..';

describe('LinkedList', () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test('should initialize with count 0', () => {
    expect(linkedList.count).toBe(0);
  });

  test('should initialize with undefined head', () => {
    expect(linkedList.head).toBeUndefined();
  });

  test('should return undefined for out of bounds index', () => {
    expect(linkedList.getElementAt(-1)).toBeUndefined();
    expect(linkedList.getElementAt(100)).toBeUndefined();
  });

  test('should return the head node for index 0', () => {
    linkedList.push(1);
    expect(linkedList.getElementAt(0)?.element).toEqual(1);
  });

  test('should return the correct node for valid index', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.getElementAt(1)?.element).toEqual(2);
    expect(linkedList.getElementAt(2)?.element).toEqual(3);
  });
});
