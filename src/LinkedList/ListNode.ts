export class ListNode<T> {
  element: T;
  next?: ListNode<T>;
  constructor(element: T) {
    // 数据域，存储节点的值
    this.element = element;
    // 指针域，指向下一个节点
    this.next = undefined;
  }
}
