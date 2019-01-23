class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
    } else this.last.next = node;
    this.last = node;
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return undefined;
    const node = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return node.val;
  }
}

const queue = new Queue();
console.log(queue.enqueue('google'));
console.log(queue.enqueue('instagram'));
console.log(queue.enqueue('yotuube'));
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
