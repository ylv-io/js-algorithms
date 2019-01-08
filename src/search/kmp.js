function buildPatternTable(pattern) {
  const fault = Array(pattern.length).fill(0);
  let j = 0;
  let i = 1;
  while (i < pattern.length || j !== 0) {
    if (pattern[i] === pattern[j]) {
      fault[i] = j + 1;
      j++;
    } else if (j > 0) {
      j = fault[j - 1];
      continue;
    }
    i++;
  }
  return fault;
}

function knuthMorrisPratt(str, sub) {
  const patternTable = buildPatternTable(sub);
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sub[j]) {
      j++;
      if (j === sub.length) return i - j + 1;
    } else if (j > 0) j = patternTable[j - 1] + 1;
  }

  return -1;
}

console.log(knuthMorrisPratt('superduper', 'duper'));
console.log(knuthMorrisPratt('abxabcabcaby', 'abcdabca'));
console.log(knuthMorrisPratt('hello my love', 'my'));
console.log(knuthMorrisPratt('hello my love', 'sup'));
console.log(knuthMorrisPratt('abxabcabcaby', 'abcaby'));
console.log(knuthMorrisPratt('abxabcabcaby', 'aabaabaaa'));
