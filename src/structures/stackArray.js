class Stack {
  constructor() {
    this.arr = [];
  }

  push(val) {
    return this.arr.push(val);
  }

  pop(val) {
    return this.arr.pop(val);
  }
}

class Queue {
  constructor() {
    this.arr = [];
  }

  push(val) {
    return this.arr.push(val);
  }

  pop(val) {
    return this.arr.shift(val);
  }
}

const stack = new Stack();
console.log(stack.push('google'));
console.log(stack.push('instagram'));
console.log(stack.push('youtube'));
console.log(stack.pop());

const queue = new Queue();
console.log(queue.push('google'));
console.log(queue.push('instagram'));
console.log(queue.push('yotuube'));
console.log(queue.pop());
