function countUniqueValues(arr) {
  let retVal = 0;
  let prev = 0;
  let next = 1;

  while (next < arr.length) {
    if (arr[prev] !== arr[next]) {
      retVal += 2;
      while (arr[next] === arr[next + 1]) {
        next++;
      }
      prev = next + 1;
      next += 2;
    } else next++;
  }

  if (arr[prev]) {
    retVal += 1;
  }

  return retVal;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([1]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
