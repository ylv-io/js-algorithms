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
    return node;
  }

  pop() {
    if (!this.head) return undefined;

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

  shift() {
    if (!this.head) return undefined;

    const retVal = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return retVal;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.tail = node;
    } else {
      node.next = this.head;
    }
    this.head = node;
    this.length++;
    return node;
  }

  get(index) {
    if (!(index < this.length)) return undefined;
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) node.val = val;
    return node;
  }

  insert(index, val) {
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);

    const prevNode = this.get(index - 1);
    if (prevNode) {
      const node = new Node(val);
      node.next = prevNode.next;
      prevNode.next = node;
      this.length++;
      return node;
    }
    return undefined;
  }

  remove(index) {
    if (index === this.length) return this.pop();
    if (index === 0) return this.shift();
    const prevNode = this.get(index - 1);
    if (prevNode) {
      const node = prevNode.next;
      prevNode.next = prevNode.next.next;
      this.length--;
      return node;
    }
    return undefined;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prevNode = null;
    for (let i = 0; i < this.length; i++) {
      const move = node.next;
      node.next = prevNode;
      prevNode = node;
      node = move;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push('hello');
list.push('bye');
list.push('!');
list.unshift('first');
list.insert(1, 'second');
list.remove(1);
console.log(list.reverse());
console.log(list.get(1));
console.log(list.get(3));
console.log(list.set(3, '!!!'));
console.log(list.get(3));
console.log(list.shift());
console.log(list.pop());
