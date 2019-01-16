class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  pop(val) {
    if (!this.head) return null;

    const retVal = this.tail;
    this.length--;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return retVal;
    }

    let tail = this.head;
    while (tail.next !== this.tail) {
      tail = tail.next;
    }
    this.tail = tail;
    this.tail.next = null;
    return retVal;
  }
}

const list = new SinglyLinkedList();
list.push('hello');
// list.push('bye');
// list.push('!');
console.log(list.pop());
