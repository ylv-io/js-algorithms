function quick(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;

  // stack all elemnts which are are less than pivot on the rigt side with count
  let pivot = 0;
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[pivot]) {
      count++;
      [arr[i], arr[count]] = [arr[count], arr[i]];
    }
  }

  // swap pivot to right position
  [arr[pivot], arr[count]] = [arr[count], arr[pivot]];
  pivot = count;

  return [...quick(arr.slice(0, pivot)), arr[pivot], ...quick(arr.slice(pivot + 1))];
}

console.log(quick([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(quick([93, 84, 17, 46, 65, 47, 43, 12, 81, 23]));
console.log(quick([2679, 2348, 7897, 4356, 5696, 2344, 983, 12342, 3241]));
console.log(quick([2345659, 920848, 6712347, 3947856, 13498575, 43854, 459863, 873452, 45611]));
