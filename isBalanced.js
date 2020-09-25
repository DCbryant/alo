const isBalanced = (root) => {
  let flag = true;

  function dfs(root) {
    if (!root || !flag) {
      return 0;
    }

    const left = dfs(root.left)
    const right = dfs(root.right)
    if (Math.abs(left - right) > 1) {
      flag = false;
      return 0;
    }
    // 返回当前子树的高度
    return Math.max(left, right) + 1
  }

  dfs(root)
  return flag

}