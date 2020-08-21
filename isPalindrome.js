function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return reversedStr === str;
}

function isPalindrome1(str) {
  const len = str.length;
  // 遍历前半部分，判断和后半部分是否对称
  for (let i = 0; i <len; i++) {
    if (str[i] !== str[len-i-1]) {
      return false;
    }
  }

  return true;
}