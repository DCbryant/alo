const validPalindrome = str => {
  const len = str.length
  let i = 0;
  let j = len - 1;

  // 当左右指针均满足对称时，一起向中间前进
  while (i < j && str[i] === str[j]) {
    i++;
    j--
  }

  // 尝试判断跳过左指针元素后字符串是否回文
  if (str[i+1] === str[j]) {
    return true;
  }

  // 尝试判断跳过右指针元素后字符串是否回文
  if(isPalindrome(i, j-1)) {
    return true
  }

  function isPalindrome(i, j) {
    while(i < j) {
      if (str[i] !== str[j]) {
        return false
      } 
      i++;
      j--
    }
    return true
  }

  return false

}