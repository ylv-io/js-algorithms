function areThereDuplicates(...args) {
  if (!args.length) {
    return false;
  }

  const hashTable = args.reduce((acc, val) => {
    acc[val] = ++acc[val] || 1;
    return acc;
  }, {});

  return !Object.keys(hashTable).every(key => hashTable[key] === 1);
}

console.log(areThereDuplicates());
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
