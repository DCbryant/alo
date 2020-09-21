const preorderTraversal  = (root) => {
  const res = []
  if (!root) res

  const stack = []
  stack.push(root)

  while (stack.length) {
    // 栈顶
    const cur = stack.pop()
    // 当前结点就是当前子树的根结点，把这个结点放在结果数组的尾部
    res.push(cur.val)
    // 若当前子树根结点有右孩子，则将右孩子入栈

    if (cur.right) {
      stack.push(cur.right)
    }

    if (cur.left) {
      stack.push(cur.left)
    }
  }

  return res
}

// 根 -> 左 -> 右

// 右 -> 左 -> 根