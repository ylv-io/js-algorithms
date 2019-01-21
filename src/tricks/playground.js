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

const data = [{a: true, b: false}, {a: false, b: true}];
let result = false;
let sample;
while (sample = data.pop()) {
  result = sample.a;
}
console.log(result);