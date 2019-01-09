function merge(arr) {
  if (arr.length === 1) return arr;
  const left = merge(arr.slice(0, arr.length / 2));
  const right = merge(arr.slice(arr.length / 2, arr.length));
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length || j < right.length) {
    if (!right[j] || left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result;
}

console.log(merge([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(merge([93, 84, 17, 46, 65, 47, 43, 12, 81]));
console.log(merge([2679, 2348, 7897, 4356, 5696, 2344, 983, 12342, 3241]));
console.log(merge([2345659, 920848, 6712347, 3947856, 13498575, 43854, 459863, 873452, 45611]));
