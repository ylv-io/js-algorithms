// A non-empty array A consisting of N integers is given.

// A triplet (X, Y, Z), such that 0 ≤ X < Y < Z < N, is called a double slice.

// The sum of double slice (X, Y, Z) is the total of A[X + 1] + A[X + 2] + ... + A[Y − 1] + A[Y + 1] + A[Y + 2] + ... + A[Z − 1].

// For example, array A such that:

//     A[0] = 3
//     A[1] = 2
//     A[2] = 6
//     A[3] = -1
//     A[4] = 4
//     A[5] = 5
//     A[6] = -1
//     A[7] = 2
// contains the following example double slices:

// double slice (0, 3, 6), sum is 2 + 6 + 4 + 5 = 17,
// double slice (0, 3, 7), sum is 2 + 6 + 4 + 5 − 1 = 16,
// double slice (3, 4, 5), sum is 0.
// The goal is to find the maximal sum of any double slice.

// Write a function:

// function solution(A);

// that, given a non-empty array A consisting of N integers, returns the maximal sum of any double slice.

// For example, given:

//     A[0] = 3
//     A[1] = 2
//     A[2] = 6
//     A[3] = -1
//     A[4] = 4
//     A[5] = 5
//     A[6] = -1
//     A[7] = 2
// the function should return 17, because no double slice of array A has a sum of greater than 17.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [3..100,000];
// each element of array A is an integer within the range [−10,000..10,000].

function solution(arr) {
  const start = new Array(arr.length);
  const end = new Array(arr.length);
  let sum = 0;
  let max = 0;
  for (let i = 1; i < (arr.length - 2); i++) {
    sum = Math.max(0, sum + arr[i]);
    start[i] = sum;
  }
  sum = 0;
  for (let i = (arr.length - 2); i > 1; i--) {
    sum = Math.max(0, sum + arr[i]);
    end[i] = sum;
  }
  for (let i = 1; i < (arr.length - 1); i++) {
    max = Math.max(max, (start[i - 1] || 0) + (end[i + 1] || 0));
  }
  return max;
}

console.log(solution([3, 2, 6, -1, 4, 5, -1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([1, 2, 3, -100, 2, 2]));
console.log(solution([-1, -1, -1, -1, 1, 1, 1, 1, 1, -1, -1, -1, -1]));
console.log(solution([-1, -1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 0, 0]));
