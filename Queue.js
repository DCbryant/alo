class Queue {
  constructor(props) {
    super(props)
    this.stack1 = []
    this.stack2 = []
  }

  push (x) {
    this.stack1.push(x)
  }

  pop () {
    // 假如 stack2 为空，需要将 stack1 的元素转移进来
    if (this.stack2.length <= 0) {
      // 当 stack1 不为空时，出栈
      while (this.stack1.length !== 0) {
        // 将 stack1 出栈的元素推入 stack2
        this.stack2.push(this.stack1.pop());
      }
    }

    // 为了达到逆序的目的，我们只从 stack2 里出栈元素
    return this.stack2.pop();
  }

  peek () {
    if (this.stack2.length <= 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    const stack2Len = this.stack2.length
    return stack2Len && this.stack2[stack2Len - 1]
  }

  empty () {
    // 若 stack1 和 stack2 均为空，那么队列空
    return !this.stack1.length && !this.stack2.length;
  }
}