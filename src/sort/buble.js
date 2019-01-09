function merge(arr) {
  for (let i = arr.length; i > 0; i--) {
    let nowSwaps = true;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        nowSwaps = false;
      }
    }
    if (nowSwaps) break;
  }
  return arr;
}

console.log(merge([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(merge([93, 84, 17, 46, 65, 47, 43, 12, 81]));
console.log(merge([2679, 2348, 7897, 4356, 5696, 2344, 983, 12342, 3241]));
console.log(merge([2345659, 920848, 6712347, 3947856, 13498575, 43854, 459863, 873452, 45611]));
