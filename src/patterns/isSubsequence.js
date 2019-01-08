function isSubsequence(base, target) {
  let prev = 0;
  let next = 0;

  while (prev < base.length && next < target.length) {
    if (base[prev] === target[next]) {
      prev++;
    }
    next++;
  }

  return prev === base.length;
}


console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
