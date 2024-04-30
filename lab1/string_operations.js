function isPalindrome(text) {
    const cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedText = cleanText.split('').reverse().join('');
    return cleanText === reversedText;
  }
  
  function isAnagram(text1, text2) {
    const cleanText1 = text1.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const cleanText2 = text2.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
    if (cleanText1.length !== cleanText2.length) {
      return false;
    }
  
    const charMap = {};
  
    for (let char of cleanText1) {
      charMap[char] = charMap[char] + 1 || 1;
    }
  
    for (let char of cleanText2) {
      if (!charMap[char]) {
        return false;
      }
      charMap[char]--;
    }
  
    return true;
  }
  
  module.exports = { isPalindrome, isAnagram };
  