import { ListNode } from './ListNode';
import { defaultEquals } from '../utils';

export class LinkedList<T> {
  count: number;
  head?: ListNode<T>;
  equalsFn: (a: T, b: T) => boolean;
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  /**
   * 循环迭代链表直到目标位置
   */
  getElementAt(index: number) {
    // 检查越界值
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      // 迭代整个链表直到目标 index。结束循环时，node 元素将是 index 位置元素的引用。
      for (let i = 0; i < index && current != undefined; i++) {
        current = current.next;
      }
      return current;
    }
  }

  /**
   * 向链表尾部添加元素
   */
  push(element: T) {
    const node = new ListNode(element);
    let current: ListNode<T>;
    if (this.head == undefined) {
      // 如果链表为空，将头节点指向新节点
      this.head = node;
    } else {
      current = this.head;
      // 遍历链表，找到最后一个节点
      while (current.next != undefined) {
        current = current.next;
      }
      // 将最后一个节点的 next 指针指向新节点
      current.next = node;
    }
    // 递增链表的长度
    this.count++;
  }

  removeAt(
    /**
     * 要移除的元素的索引。
     */
    index: number
  ): T | undefined {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head;
      // 移除第一项
      if (index === 0 && current != undefined) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1) as ListNode<T>;
        // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
        current = previous.next;
        previous.next = current?.next;
      }
      this.count--;
      return current?.element;
    }
  }

  /**
   * 在任意位置插入元素
   */
  insert(element, index) {
    // 由于我们处理的是位置，就需要检查越界值
    if (index >= 0 && index <= this.count) {
      const node = new ListNode(element);
      if (index === 0) {
        // 在第一个位置添加
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1) as ListNode<T>;
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++; // 更新链表长度
      return true;
    }

    return false;
  }

  /**
   * 返回一个元素的位置
   */
  indexOf(element: T) {
    let current = this.head;
    for (let i = 0; i < this.count && current != undefined; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  /**
   * 从链表中移除元素
   */
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == undefined) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current !== undefined; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}
