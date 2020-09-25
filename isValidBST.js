const isValidBST = (root) => {
  function dfs(root, min, max) {
    // 空节点也满足条件
    if (!root) return true
    if (root.val <= min || root.val >= max) return false
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
  }
  return dfs(root, -Infinity, Infinity)
}