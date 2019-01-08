function findLongestSubstring(arr) {
  let prev = 0;
  let next = 0;
  const hash = {};
  let result = 0;

  while (next < arr.length) {
    if (hash[arr[next]] !== undefined) {
      for (let i = prev; i < hash[arr[next]]; i++) {
        delete hash[arr[i]];
      }
      prev = hash[arr[next]] + 1;
    }
    hash[arr[next]] = next;
    const span = next - prev + 1;
    if (span > result) {
      result = span;
    }
    next++;
  }
  return result;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));
