function capitalizeWords(arr) {
  if (!arr.length) return [];
  return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
}

const words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
