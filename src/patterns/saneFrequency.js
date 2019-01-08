function sameFrequency(first, second) {
  const firstStr = String(first);
  const sencondStr = String(second);

  if (firstStr.length !== sencondStr.length) {
    return false;
  }

  const firstObj = {};
  for (const char of firstStr) {
    firstObj[char] = ++firstObj[char] || 0;
  }

  const secondObj = {};
  for (const char of sencondStr) {
    secondObj[char] = ++secondObj[char] || 0;
  }

  for (const char in firstObj) {
    if (firstObj[char] !== secondObj[char]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
