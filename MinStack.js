class MinStack {
  constructor(props) {
    super(props);
    this.stack = []
  }

  push (x) {
    this.stack.push(x)
  }

  pop () {
    this.stack.pop()
  }

  top () {
    if (!this.stack || this.stack.length) return
    return this.stack[this.stack.length - 1]
  }

  getMin () {
    let minValue = Infinity
    for (let i = 0; i < this.stack.length; i++) {
      if (this.stack[i] < minValue) minValue = this.stack[i]
    }
    return minValue
  }
}