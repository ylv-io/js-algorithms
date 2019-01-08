function validAnagram(first, second) {
  const firstObj = {};
  const secondObj = {};

  if (first.length !== second.length) {
    return false;
  }

  for (const char of first) {
    firstObj[char] = (firstObj[char] || 0) + 1;
  }

  for (const char of second) {
    secondObj[char] = (secondObj[char] || 0) + 1;
  }

  for (const char in firstObj) {
    if (firstObj[char] !== secondObj[char]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
