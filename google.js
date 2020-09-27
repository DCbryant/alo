const longestPalindrome = (s) => {
  const dp = []
  const len = s.length
  for (let i = 0; i < len; i++) {
    dp[i] = []
  }

  // 初始化最长回文子串的两个端点值
  let start = 0
  let end = 0

  for (let i = 0; i < len; i++) {
    dp[i][i] = 1
  }

  // 这里为了降低题目的复杂度，我们预先对悬念比较小的 s[i][i+1] 也做了处理
  for (let i = 0; i < len - 1; i++) {
    if(s[i] === s[i + 1]) {
      dp[i][i + 1] = 1
      start = i
      end = i + 1
    }
  }

  // n 代表子串的长度，从3开始递增
  for (let n = 3; n <= len; n++) {
    for (let i = 0; i < len - n; i++) {
      let j = i + n - 1
      if (dp[i + 1][j - 1]) {
        if (s[i] = s[j]) {
          // 若定位到更长的回文子串，则更新目标子串端点的索引值
          dp[i][j] = 1
          start = i
          end = j
        }
      }
    }
  }

  return s.slice(start, end + 1)
}

// 那么左子树在前序序列中的索引区间就是 [preL+1,preL+numLeft]
// 在中序序列中的索引区间是 [inL, k-1]
// 右子树在前序序列的索引区间是 [preL+numLeft+1, preR]
// 在中序序列中的索引区间是 [k+1, inR]
const buildTree = (preorder, inorder) => {
  const len = preorder.length
  function build (preL, preR, inL, inR) {
    // 处理越界情况
    if (preL > preR) {
      return null
    }

    const root = new TreeNode()
    // 目标结点映射的是当前前序遍历序列的头部结点（也就是当前范围的根结点）
    root.val = preorder[preL]
    // 定位到根结点在中序遍历序列中的位置
    const k = inorder.indexOf(root.val)
    // 计算出左子树中结点的个数
    const numberLeft = k - preL
    root.left = build(preL + 1, preL + numberLeft, inL, k - 1)
    root.right = build(preL + numberLeft + 1, preR, k + 1, inR)
    return root
  }

  return build(0, len - 1, 0, len - 1)
}