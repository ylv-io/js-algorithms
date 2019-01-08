function averagePair(arr, value) {
  if (!arr.length) {
    return false;
  }

  let prev = 0;
  let next = arr.length - 1;

  while (prev < next) {
    if ((arr[prev] + arr[next]) === (value * 2)) {
      return true;
    }
    if ((arr[prev] + arr[next]) > (value * 2)) {
      --next;
    } else {
      ++prev;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
