function knuthMorrisPratt(str, sub) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (str[i + j] !== sub[j]) {
        break;
      } else if (j === sub.length - 1) return i;
    }
  }

  return -1;
}

console.log(knuthMorrisPratt('hello my love', 'my'));
console.log(knuthMorrisPratt('hello my love', 'sup'));
