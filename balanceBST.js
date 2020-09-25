const balanceBST = (root) => {
  const nums = []

  const inorder = (root) => {
    if (!root) return
    inorder(root.left)
    nums.push(root.val)
    inorder(root.right)
  }

  function buildAVL(low, high) {
    if (low > high) return
    const mid = Math.floor(low + (high - low) / 2)
    const cur = new TreeNode(nums[mid])
    cur.left = buildAVL(low, mid - 1)
    cur.right = buildAVL(mid + 1, high)
    return cur
  }

  inorder(root)
  return buildAVL(0, nums.length - 1)

}