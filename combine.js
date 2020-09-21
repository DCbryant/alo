const combine = (n, k) => {
  const res = []
  const subset = []
  dfs(1)


  function dfs(index) {
    if (subset.length === k) {
      res.push(subset.slice())
      return
    }
    // 从当前数字的值开始，遍历 index-n 之间的所有数字
    for (let i = 0; i <= n; i++) {
       // 这是当前数字存在于组合中的情况
       subset.push(i) 
       // 基于当前数字存在于组合中的情况，进一步 dfs
       dfs(i+1)
       // 这是当前数字不存在与组合中的情况
       subset.pop()
    }
  }

  return res
}