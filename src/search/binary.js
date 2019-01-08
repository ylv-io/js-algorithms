function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const middle = Math.ceil((left + right) / 2);
    if (arr[middle] === val) {
      return middle;
    }
    if (val > arr[middle]) {
      left = middle + 1;
    } else right = middle - 1;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
