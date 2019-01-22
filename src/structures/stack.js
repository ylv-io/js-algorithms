class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else [node.next, this.first] = [this.first, node];
    return ++this.size;
  }

  pop() {
    if (!this.first) return undefined;
    const node = this.first;
    if (this.size === 1) this.last = null;
    this.first = this.first.next;
    this.size--;
    return node.val;
  }
}

const stack = new Stack();
console.log(stack.push('google'));
console.log(stack.push('insta'));
console.log(stack.push('amazon'));
console.log(stack.push('mail'));
console.log(stack.pop());
console.log(stack);
