let f = (...f) => f;
console.log(f(10));

f = (...f) => f.reduce(f => f);
console.log(f(10));

function ff() {
  return arguments;
}
console.log(ff(10));

f = f => f;
console.log(f(10));
