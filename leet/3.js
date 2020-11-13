/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.maxSize = maxSize
  this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.stack.length < this.maxSize) {
    this.stack.push(x)
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.stack.length) {
    return this.stack.pop()
  } else {
    return -1
  }
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  const len = this.stack.length
  for (let i = 0; i < k; i++) {
    if (i < len) {
      this.stack[i] += val;
    } else {
      return
    }
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

const customStack = new CustomStack(3);
customStack.push(1); // 栈变为 [1]
customStack.push(2); // 栈变为 [1, 2]
customStack.pop(); // 返回 2 --> 返回栈顶值 2，栈变为 [1]
customStack.push(2); // 栈变为 [1, 2]
customStack.push(3); // 栈变为 [1, 2, 3]
customStack.push(4); // 栈仍然是 [1, 2, 3]，不能添加其他元素使栈大小变为 4
customStack.increment(5, 100); // 栈变为 [101, 102, 103]
customStack.increment(2, 100); // 栈变为 [201, 202, 103]
customStack.pop(); // 返回 103 --> 返回栈顶值 103，栈变为 [201, 202]
customStack.pop(); // 返回 202 --> 返回栈顶值 202，栈变为 [201]
customStack.pop(); // 返回 201 --> 返回栈顶值 201，栈变为 []
customStack.pop(); // 返回 -1 --> 栈为
console.log(customStack, 'xxx')