const search = (root, n) => {
  if (!root) return
  if (root.val === n) {
    return root.val
  } else if(root.val > n) {
    search(root.left)
  } else {
    search(root.right)
  }
}

const insert = (root, n) => {
  if (!root) {
    root = new TreeNode(n)
    return
  }

  if (root.val === n) {
    // 该节点已经存在，直接return
    return
  } else if (root.val > n) {
    insert(root.left, n)
  } else {
    insert(root.right, n)
  }
}

const deleteNode = (root, n) => {
  // 如果没有找到目标结点，直接return
  if (!root) return
  // 定位到目标结点，开始分情况处理删除动作
  if (root.val === n) {
    // 若是叶子节点则直接删除
    if (!root.left && !root.right) {
      root = null
    } else if (root.left) {
      // 有左子树或者左右都有
      const maxLeft = findMax(root)
      // 用这个 maxLeft 覆盖掉需要删除的当前结点
      root.val = maxLeft.val
      // 覆盖动作会消耗掉原有的 maxLeft 结点
      deleteNode(root.left, maxLeft.val)
    } else {
      const minRight = findMin(root)
      root.val = minRight.val
      deleteNode(root.right, minRight.val)
    }
  } else if (root.val > n) {
    // 若当前结点的值比 n 大，则在左子树中继续寻找目标结点
    deleteNode(root.left, n)
  } else {
    deleteNode(root.right, n)
  }
}

// 寻找左子树最大值
function findMax(root) {
  while (root.right) {
    root = root.right
  }
  return root
}

// 寻找右子树的最小值
function findMin(root) {
  while (root.left) {
    root = root.left
  }
  return root
}