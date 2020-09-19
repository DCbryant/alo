class MinStack {
  constructor(props) {
    this.stack = []
    this.stack1 = []
  }

  pop () {
    // 若出栈的值和if当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值的有效性
    if (this.stack.pop() === this.stack1[this.stack.length - 1]) {
      this.stack1.pop()
    }
  }

  push (x) {
    this.stack.push(x)
    // 若入栈的值小于当前最小值，则推入辅助栈栈顶
    if (this.stack1.length === 0 || this.stack1[this.stack1.length - 1] >= x) {
      this.stack1.push(x)
    }
  }

  top () {
    return this.stack[this.stack.length - 1]
  }

  getMin () {
    // 辅助栈的栈顶，存的就是目标中的最小值
    return this.stack1[this.stack1.length - 1]
  }
}