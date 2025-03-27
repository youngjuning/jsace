import { LinkedList } from '..';

describe('LinkedList', () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should initialize with count 0', () => {
    expect(linkedList.count).toBe(0);
  });

  it('should initialize with undefined head', () => {
    expect(linkedList.head).toBeUndefined();
  });

  it('should return undefined for out of bounds index', () => {
    expect(linkedList.getElementAt(-1)).toBeUndefined();
    expect(linkedList.getElementAt(100)).toBeUndefined();
  });

  it('should return the head node for index 0', () => {
    linkedList.push(1);
    expect(linkedList.getElementAt(0)?.element).toEqual(1);
  });

  it('should return the correct node for valid index', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.getElementAt(1)?.element).toEqual(2);
    expect(linkedList.getElementAt(2)?.element).toEqual(3);
  });

  it('should return true when list is empty', () => {
    expect(linkedList.isEmpty()).toBe(true);
  });

  it('should return false when list is not empty', () => {
    linkedList.push(1);
    expect(linkedList.isEmpty()).toBe(false);
  });

  it('should return 0 when the list is empty', () => {
    expect(linkedList.size()).toBe(0);
  });

  it('should return the correct size after adding elements', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.size()).toBe(3);
  });

  it('should remove the first element', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.removeAt(0)).toBe(1);
  });

  it('should remove the last element', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.removeAt(2)).toBe(3);
  });

  it('should insert element at the beginning of the list', () => {
    linkedList.insert(1, 0);
    expect(linkedList.head?.element).toBe(1);
    expect(linkedList.count).toBe(1);
  });

  it('should insert element at the end of the list', () => {
    linkedList.insert(1, 0);
    linkedList.insert(2, 1);
    expect(linkedList.getElementAt(1)?.element).toBe(2);
    expect(linkedList.count).toBe(2);
  });

  it('should return false if out of bounds or an exception is thrown', () => {
    expect(linkedList.insert(1, -1)).toBeFalsy();
  });
});
