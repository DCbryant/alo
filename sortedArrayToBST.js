const sortedArrayToBST = nums => {
  if (!nums || !nums.length) return

  function buildBst(low, high) {
    if (low > high) return null

    // 二分一下，取出当前子序列的中间元素
    const mid = Math.floor(low + (high - low) / 2)
    const cur = new TreeNode(nums[mid])
    cur.left = buildBst(low, mid - 1)
    cur.right = buildBst(mid + 1, high)
    return cur
  }

  const root = buildBst(0, nums.length - 1)
  return root
}