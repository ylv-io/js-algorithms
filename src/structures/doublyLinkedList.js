class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;
    return this;
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

    const tail = this.tail.prev;

    this.tail = tail;
    this.tail.next = null;
    retVal.prev = null;

    return retVal;
  }

  shift() {
    if (!this.head) return undefined;

    const retVal = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    } else this.head = null;
    return retVal;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
    this.length++;
    return node;
  }

  get(index) {
    if (!(index < this.length)) return undefined;

    if (index < (this.length / 2)) {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }
    let node = this.tail;
    for (let i = 0; i < (this.length - (index + 1)); i++) {
      node = node.prev;
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
      node.prev = prevNode;
      prevNode.next.prev = node;
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
      prevNode.next = node.next;
      node.prev = prevNode;
      node.next = null;
      node.prev = null;
      this.length--;
      return node;
    }
    return undefined;
  }
}

const doublyLinkedList = new DoublyLinkedList();
console.log(doublyLinkedList.push(5));
