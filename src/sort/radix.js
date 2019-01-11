function getDigit(num, place) {
  return Math.floor(Math.abs(num) / (10 ** place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  return nums.reduce((max, cur) => Math.max(max, digitCount(cur)), 0);
}

Object.defineProperty(Array.prototype, 'flat', {
  value: function(depth = 1) {
    return this.reduce(function (flat, toFlatten) {
      return flat.concat((Array.isArray(toFlatten) && (depth-1)) ? toFlatten.flat(depth-1) : toFlatten);
    }, []);
  }
});

function radix(arr) {
  return [...Array(mostDigits(arr)).keys()]
    .reduce((ret, i) => ret.reduce((group, item) => {
      const digit = getDigit(item, i);
      group[digit] = [...group[digit] || [], item];
      return group;
    }, new Array(10)).flat(), arr);
}

console.log(mostDigits([23, 342, 23, 2342342, 90]));

console.log(radix([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(radix([93, 84, 17, 46, 65, 47, 43, 12, 81, 23]));
console.log(radix([2679, 2348, 7897, 4356, 5696, 2344, 983, 12342, 3241]));
console.log(radix([2345659, 920848, 6712347, 3947856, 13498575, 43854, 459863, 873452, 45611]));
