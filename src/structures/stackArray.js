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

const stack = new Stack();
console.log(stack.push('google'));
console.log(stack.push('instagram'));
console.log(stack.push('youtube'));
console.log(stack.pop());
