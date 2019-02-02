class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      return this.keyMap[index].filter(o => o[0] === key)[0][1];
    }
    return undefined;
  }

  keys() {
    return this.keyMap
      .filter(o => o !== undefined)
      .reduce((a, b) => [...a, ...b], [])
      .map(o => o[0]);
  }

  values() {
    return [...new Set(this.keyMap
      .filter(o => o !== undefined)
      .reduce((a, b) => [...a, ...b], [])
      .map(o => o[1]))];
  }
}

const table = new HashTable();
table.set('plum', '#DDA0DD');
table.set('salmon', '#FA8072');
table.set('maroon', '#800000');
table.set('yellow', '#FFFF00');
table.set('olive', '#808000');
table.set('lightcoral', '#F08080');
table.set('mediumvioletred', '#C71585');
table.set('plum', '#DDA0DD');
table.set('purple', '#DDA0DD');
table.set('violet', '#DDA0DDD');

console.log(table.keys());
console.log(table.values());
