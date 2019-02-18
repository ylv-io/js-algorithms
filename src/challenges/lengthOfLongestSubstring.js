// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let obj = {};
  let max = 0;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] !== undefined) {
      counter = 0;
      i = obj[s[i]];
      obj = {};
      continue;
    }
    obj[s[i]] = i;
    counter++;
    max = Math.max(counter, max);
  }
  return max;
}


console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
