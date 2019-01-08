function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      else break;
    }
  }
  return arr;
}

console.log(insertion([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(insertion([93, 84, 17, 46, 65, 47, 43, 12, 81]));
console.log(insertion([2679, 2348, 7897, 4356, 5696, 2344, 983, 12342, 3241]));
console.log(insertion([2345659, 920848, 6712347, 3947856, 13498575, 43854, 459863, 873452, 45611]));
