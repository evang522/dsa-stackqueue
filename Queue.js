'use strict';
class _Node {
  constructor(value,prev=null,next=null) {
    this.value = value;
    this.next =next;
    this.prev = prev;
  }
}


class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const node = new _Node(value);
    
    if (this.head === null) {
      return this.head = node;
    }

    if (this.tail) {
      node.next = this.tail;
      return this.tail.prev = node;
    }

    this.last = node;
    
  }

}



// Previous points to the end of the queue (right side);
// Next points to the beginning (left side);
