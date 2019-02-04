function solution(A) {
  let i;
  let sum = 0;
  const len = A.length;
  const startArr = (new Array(len)).fill(0);
  const endArr = (new Array(len)).fill(0);
  let active = 0;

  // sort start and end boundaries of the discs into their own arrays
  for (i = 0; i < len; i += 1) {
    if (i < A[i]) startArr[0]++;
    else startArr[i - A[i]]++;

    if (i + A[i] >= len) endArr[len - 1]++;
    else endArr[i + A[i]]++;
  }

  for (i = 0; i < len; i++) {
    sum += active * startArr[i] + (startArr[i] * (startArr[i] - 1)) / 2;
    // over 10 000 000 return -1 as stated in the assignment
    if (sum > 10000000) return -1;

    active += startArr[i] - endArr[i];
  }
  // return the answer
  return sum;
}

console.log(solution([]));
console.log(solution([1, 5, 2, 1, 4, 0]));
