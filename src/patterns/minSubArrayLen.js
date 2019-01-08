function minSubArrayLen(arr, limit) {
  let result = arr.length;
  let prev = 0;
  let next = 0;
  let sum = 0;

  while (next < arr.length) {
    sum += arr[next];
    if (sum >= limit) {
      while (sum >= limit) {
        sum -= arr[prev];
        prev++;
      }
      const span = next - prev + 2;
      if (span < result) {
        result = span;
      }
    }
    next++;
  }

  return result < arr.length ? result : 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
