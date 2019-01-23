class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(val) {
    return this.arr.push(val);
  }

  dequeue(val) {
    return this.arr.shift(val);
  }
}

const queue = new Queue();
console.log(queue.enqueue('google'));
console.log(queue.enqueue('instagram'));
console.log(queue.enqueue('yotuube'));
console.log(queue.dequeue());
