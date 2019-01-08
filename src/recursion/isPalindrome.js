function isPalindrome(str) {
  if (!str.length) return true;
  return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome('a'));
console.log(isPalindrome('ab'));
console.log(isPalindrome('bb'));
console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('amanaplanacanalpandemonium'));

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
