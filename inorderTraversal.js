const inorderTraversal = root => {
  const res = []
  const stack = []

  let cur = root
  while (cur || stack.length) {
    // 这个 while 的作用是把寻找最左叶子结点的过程中，途径的所有结点都记录下来
    while (cur) {
      // 将途径的结点入栈
      stack.push(cur)
      // 继续搜索当前结点的左孩子
      cur = cur.left
    }

    cur = stack.pop()
    res.push(cur.val)
    cur = cur.right
  }

  return res
}


