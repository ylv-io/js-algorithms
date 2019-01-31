class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val) {
    return this.bubleUp(this.values.push(val) - 1);
  }

  bubleUp(index) {
    const parentIndex = PriorityQueue.parent(index);
    const parent = this.values[parentIndex];
    const value = this.values[index];
    if (parentIndex < 0 || value > parent) return this;
    [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
    return this.bubleUp(parentIndex);
  }

  dequeue() {
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

    if ((!left || value < left) && (!right || value < right)) return;

    let target = rightIndex;
    if (left && left < right) {
      target = leftIndex;
    }
    [this.values[target], this.values[index]] = [this.values[index], this.values[target]];
    this.sink(target);
  }

  static parent(index) {
    return Math.floor((index - 1) / 2);
  }
}

const queue = new PriorityQueue();
queue.enqueue(8);
queue.enqueue(7);
queue.enqueue(6);
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(queue.dequeue());
