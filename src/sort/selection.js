function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  return arr;
}

console.log(selection([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(selection([93, 84, 17, 46, 65, 47, 43, 12, 81]));
console.log(selection([2679, 2348, 7897, 4356, 5696, 2344, 983, 12342, 3241]));
console.log(selection([2345659, 920848, 6712347, 3947856, 13498575, 43854, 459863, 873452, 45611]));
