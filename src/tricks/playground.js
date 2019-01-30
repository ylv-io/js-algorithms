// function aaa() {
//   return
//   {
//       test: 1
//   };
// }
// console.log(typeof aaa());

// console.log(Number("1") - 1 == 0);

// console.log((true + false) > 2 + true);

// function bar() {
//   return foo;
//   foo = 10;
//   function foo() {}
//   var foo = '11';
// }
// console.log(typeof bar());

// console.log("1" - - "1");

// var x = 3;

// var foo = {
//     x: 2,
//     baz: {
//         x: 1,
//         bar: function() {
//             return this.x;
//         }
//     }
// }

// var go = foo.baz.bar;

// console.log(go());
// console.log(foo.baz.bar());

// console.log(new String("This is a string") instanceof String)

// console.log([] + [] + 'foo'.split(''));

// console.log(new Array(5).toString());

// var myArr = ['foo', 'bar', 'baz'];
// myArr.length = 0;
// myArr.push('bin');
// console.log(myArr);

// console.log(String('Hello') === 'Hello');

// var x = 0;
// function foo() {
//     x++;
//     this.x = x;
//     return foo;
// }
// var bar = new new foo;
// console.log(bar.x);

// console.log('This is a string' instanceof String);

// var bar = 1,
//     foo = {};

// foo: {
//     bar: 2;
//     baz: ++bar;
// };
// console.log(foo.baz + foo.bar + bar);

// var myArr = ['foo', 'bar', 'baz'];
// myArr[2];
// console.log(2 in myArr);

// var arr = [];
// arr[0]  = 'a';
// arr[1]  = 'b';
// arr.foo = 'c';
// console.log(arr.length);

// console.log(10 > 9 > 8 === true);

// function foo(a, b) {
//   arguments[1] = 2;
//   console.log(b);
// }
// foo(1);

// console.log(NaN === NaN)

// // Global+Local: An extra complex Case

// var x = 5;

// (function () {
//     console.log(x);
//     var x = 10;
//     console.log(x);
// })();

// // This will print out undefined and 10 rather than 5 and 10 since JavaScript always moves variable declarations (not initializations) to the top of the scope, making the code equivalent to:

// var x = 5;

// (function () {
//     var x;
//     console.log(x);
//     x = 10;
//     console.log(x);
// })();

// // Catch clause-scoped variable

// var e = 5;
// console.log(e);
// try {
//     throw 6;
// } catch (e) {
//     console.log(e);
// }
// console.log(e);
// // This will print out 5, 6, 5. Inside the catch clause e shadows global and local variables. But this special scope is only for the caught variable. If you write var f; inside the catch clause, then it's exactly the same as if you had defined it before or after the try-catch block.

// var a = true; var b = false;

// console.log(delete a === b);
// console.log(delete a);
// console.log(delete b);
// console.log(delete c);

// let a = -1 ? 'foo' ? null : -1 : 1;
// console.log(a);

// const data = [{a: true, b: false}, {a: false, b: true}];
// let result = false;
// let sample;
// while (sample = data.pop()) {
//   result = sample.a;
// }
// console.log(result);

// (function(){
//   var a = b = 3;
// })();

// console.log(typeof a);
// console.log(typeof b);

// function foo1() {
//   return {
//     bar: 'bar',
//   };
// }

// function foo2() {
//   return
//   {
//     'bar';
//   }
// }

// console.log(foo1());
// console.log(foo2());

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);
// console.log(9007199254740993 === 9007199254740992);

// function solution(N) {
//   const bin = N.toString(2);
//   let max = 0;
//   let counter = 0;
//   for (let i = 0; i < bin.length; i++) {
//     if (bin[i] === '1') {
//       if (counter > 0) {
//         max = Math.max(max, counter);
//         counter = 0;
//       }
//     } else counter++;
//   }
//   return max;
// }

// console.log(solution(0));
// console.log(solution(1));
// console.log(solution(9));
// console.log(solution(529));
// console.log(solution(15));
// console.log(solution(32));
// console.log(solution(513));
// console.log(solution(2147483644));

// function solution(arr) {
//   const counter = {};
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (!counter[num]) counter[num] = true;
//     else delete counter[num];
//   }
//   return Object.keys(counter)[0];
// }

// console.log(solution([9, 3, 9, 3, 9, 7, 9]));
// console.log(solution([1, 5, 1]));

// function solution(arr, k) {
//   if (arr.length) {
//     for (let i = 0; i < k; i++) {
//       arr.unshift(arr.pop());
//     }
//   }
//   return arr;
// }

// console.log(solution([], 3));
// console.log(solution([3, 8, 9, 7, 6], 3));
// console.log(solution([3, 8, 9, 7, 6], 0));
// console.log(solution([3, 8, 9, 7, 6], 100));

// function solution(x, y, d) {
//   if (x === y) return 0;
//   return Math.ceil((y - x) / d);
// }

// console.log(solution(10, 100, 1));
// console.log(solution(10, 85, 30));

// function solution(arr) {
//   if (!arr.length) return 0;
//   const n = arr.length + 1;
//   const sum = n * (n + 1) / 2;
//   return sum - arr.reduce((a, b) => a + b);
// }

// console.log(solution([]));
// console.log(solution([2, 3, 1, 5]));

// function solution(arr) {
//   let left = arr[0];
//   let right = arr.reduce((a, b) => a + b) - left;
//   let min = Number.MAX_VALUE;
//   for (let i = 1; i < arr.length; i++) {
//     min = Math.min(Math.abs(left - right), min);
//     left += arr[i];
//     right -= arr[i];
//   }
//   return min;
// }

// console.log(solution([3, 1]));
// console.log(solution([3, 1, 2, 4, 3]));

// function solution(arr) {
//   let isUnique = true;
//   arr.reduce((obj, num) => {
//     if (!obj[num]) obj[num] = 1;
//     else isUnique = false;
//     return obj;
//   }, {});
//   const n = arr.length;
//   const sum = n * (n + 1) / 2;
//   return (sum - arr.reduce((a, b) => a + b)) === 0 && isUnique ? 1 : 0;
// }

// console.log(solution([1]));
// console.log(solution([10]));
// console.log(solution([4, 1, 3, 2]));
// console.log(solution([4, 1, 3]));
