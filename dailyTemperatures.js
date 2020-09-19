const dailyTemperatures = (t) => {
  const len = t.length
  const stack = []
  const res = (new Array(len)).fill(0)
  for (let i = 0; i < len; i++) {
    // 若栈不为0，且存在打破递减趋势的温度值
    while (stack.length && t[i] > t[slack[stack.length - 1]]) {
      // 将栈顶温度值对应的索引出栈
      const top = stack.pop()  
      // 计算 当前栈顶温度值与第一个高于它的温度值 的索引差值
      res[top] = i - top
    }
    // 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
    stack.push(i)
  }

  return res
}