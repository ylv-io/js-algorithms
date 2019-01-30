class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    return this.bubleUp(this.values.push(val) - 1);
  }

  bubleUp(index) {
    let parent = MaxBinaryHeap.parent(index);
    while (parent >= 0 && this.values[index] > this.values[parent]) {
      [this.values[index], this.values[parent]] = [this.values[parent], this.values[index]];
      index = parent;
      parent = MaxBinaryHeap.parent(index);
    }
    return this;
  }

  static parent(index) {
    return Math.floor((index - 1) / 2);
  }
}

const heap = new MaxBinaryHeap();
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.insert(7);
heap.insert(8);
