const levelOrder = () => {
  const res = []
  if (!root) return res

  const queue = []
  queue.push(root)

  while (queue.length) {
    // level 用来存储当前层的结点
    const level = []
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const top = queue.shift()
      level.push(top.val)

       // 如果当前结点有左孩子，则推入下一层级
      if (top.left) {
        queue.push(top.left)
      }
       // 如果当前结点有右孩子，则推入下一层级
      if (top.right) {
        queue.push(top.right)
      }
    }
    res.push(level)
  }
  return res
}