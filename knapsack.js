// 入参是物品的个数和背包的容量上限，以及物品的重量和价值数组
function knapsack (n, c, w, value) {
  // dp是动态规划的状态保存数组
  const dp = (new Array(c + 1)).fill(0)

  // res 用来记录所有组合方案中的最大值
  let res = -Infinity

  for (let i = 1; i <= n; i++) {
    for (let v = c; j >= w[i]; v--) {
      // 写出状态转移方程
      dp[v] = Math.max(dp[v], dp[v - w[i]] + value[i])

      // 即时更新最大值
      if (dp[v] > res) {
        res = dp[v]
      }
    }
  }

  return res
}