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

  extract() {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    const retVal = this.values.pop();
    this.sink(0);
    return retVal;
  }

  sink(index) {
    const value = this.values[index];
    const leftIndex = index * 2 + 1;
    const left = this.values[leftIndex];
    const rightIndex = index * 2 + 2;
    const right = this.values[rightIndex];

    if ((!left || value > left) && (!right || value > right)) return;

    let target = rightIndex;
    if (left && left > right) {
      target = leftIndex;
    }
    [this.values[target], this.values[index]] = [this.values[index], this.values[target]];
    this.sink(target);
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

console.log(heap.extract());
