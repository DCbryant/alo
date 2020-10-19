const lowestCommonAncestor = (root, p, q) => {
  function dfs(root) {
    // 若当前结点不存在（意味着无效）或者等于p/q（意味着找到目标），则直接返回
    if (!root || root === p || root === q) {
      return root
    }

    const leftNode = dfs(root.left)
    const rightNode = dfs(root.right)
    // 如果左子树和右子树同时包含了p和q，那么这个结点一定是最近公共祖先
    if (leftNode && rightNode) {
      return root
    }

    // 如果左子树和右子树其中一个包含了p或者q，则把对应的有效子树汇报上去，等待进一步的判断；否则返回空
    return leftNode || rightNode
  }

  return dfs(root)
}

const findMedianSortedArrays = (nums1, nums2) => {
  const len1 = nums1.length
  const len2 = nums2.length

  // 确保直接处理的数组（第一个数组）总是较短的数组
  if (len1 > len2) {
    return findMedianSortedArrays(nums2, nums1)
  }

  const len = len1 + len2
  // 初始化第一个数组“下刀”的位置
  let slice1 = 0
  // 初始化第二个数组“下刀”的位置
  let slice2 = 0
  // 初始化第一个数组二分范围的左端点
  let slice1L = 0
  // 初始化第一个数组二分范围的右端点
  let slice1R = len1

  let L1, L2, R1, R2
  // 当slice1没有越界时

  // 当slice1没有越界时
  while (slice1 <= len1) {
    // 以二分原则更新slice1
    slice1 = Math.floor((slice1R - slice1L) / 2) + slice1L
    // 用总长度的1/2减去slice1，确定slice2
    slice2 = Math.floor(len / 2) - slice1 // 计算L1、L2、R1、R2
    const L1 = (slice1 === 0) ? -Infinity : nums1[slice1 - 1]
    const L2 = (slice2 === 0) ? -Infinity : nums2[slice2 - 1]
    const R1 = (slice1 === len1) ? Infinity : nums1[slice1]
    const R2 = (slice2 === len2) ? Infinity : nums2[slice2]

    // 处理L1>R2的错误情况
    if (L1 > R2) {
      // 将slice1R左移，进而使slice1对应的值变小
      slice1R = slice1 - 1
    } else if (L2 > R1) {
      // 反之将slice1L右移，进而使slice1对应的值变大
      slice1L = slice1 + 1
    } else {
      // 如果已经符合取中位数的条件（L1<R2&&L2<R1)，则直接取中位数
      if (len % 2 === 0) {
        const L = L1 > L2 ? L1 : L2
        const R = R1 < R2 ? R1 : R2
        return (L + R) / 2
      } else {
        const median = (R1 < R2) ? R1 : R2
        return median
      }
    }
  }
  return -1


}