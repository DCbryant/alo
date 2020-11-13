// "3[a]2[bc]"

const decodeString = function(s) {
  const stack = []
  const len = s.length;
  let repeatStr = ''
  let repeatCount = ''
  for ( let i = 0 ; i < len; i++) {
    const current = s[i]
    if (isNumber(current)) { // 更新重复次数
      repeatCount += current
    } else if (current === ']') { // 出栈，拼接字符串
      const data = stack.pop()
      repeatStr = data.repeatStr + repeatStr.repeat(data.repeatCount)
    } else if (current === '[') { // 入栈，并清空字符串
      stack.push({repeatStr, repeatCount})
      repeatStr = ''
      repeatCount = ''
    } else { // 更新字符串
      repeatStr += current
    }
  }
  return repeatStr
};

function isNumber(s) {
  return /^\d$/.test(s);
}

console.log(decodeString("3[a]2[bc]"))