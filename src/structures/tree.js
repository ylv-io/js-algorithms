class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const helper = (node) => {
      const dir = val < node.val ? 'left' : 'right';
      if (node[dir]) helper(node[dir]); else node[dir] = new Node(val);
    };

    if (!this.root) {
      this.root = new Node(val);
    } else helper(this.root);

    return this;
  }

  find(val) {
    const helper = (node) => {
      if (val === node.val) return true;
      const dir = val < node.val ? 'left' : 'right';
      return node[dir] ? helper(node[dir]) : false;
    };

    return !this.root ? false : helper(this.root);
  }

  breadth() {
    const data = [];
    const queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log(tree);

tree.insert(20);
tree.insert(8);
tree.insert(5);

console.log(tree.find(5));
console.log(tree.find(1));
console.log(tree.find(19));
console.log(tree.find(20));
console.log(tree.breadth());

console.log(tree);
