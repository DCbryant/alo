const myAtoi = (str) => {
  const reg = /\s*([-\+]?[0-9]*).*/
  // 得到捕获组
  const groups = str.match(reg)
  const max = Math.pow(2, 31) - 1;
  const min = -max - 1;

  // targetNum 用于存储转化出来的数字
  let targetNum = 0

  // 如果匹配成功
  if (groups) {
    // 尝试转化捕获到的结构
    targetNum = +groups[1]
    // 注意，即便成功，也可能出现非数字的情况，比如单一个'+'
    if (isNaN(targetNum)) {
      // 不能进行转换时返回0
      targetNum = 0;
    }
  }

  if (targetNum > max) {
    return max
  }

  if (targetNum < min) {
    return min
  }

  return targetNum
}