const { isPalindrome, isAnagram } = require('./string_operations');

describe('isPalindrome', () => {
  test.each([
    ['racecar', true],
    ['level', true],
    ['hello', false],
    ['noon', true],
    ['12321', true],
    ['', true],
  ])('"%s" should be palindrome: %s', (text, expected) => {
    expect(isPalindrome(text)).toBe(expected);
  });
});

describe('isAnagram', () => {
  test.each([
    ['listen', 'silent', true],
    ['hello', 'world', false],
    ['rail safety', 'fairy tales', true],
    ['anagram', 'nag a ram', true],
    ['12345', '54321', true],
    ['', '', true],
  ])('"%s" and "%s" should be anagrams: %s', (text1, text2, expected) => {
    expect(isAnagram(text1, text2)).toBe(expected);
  });
});
