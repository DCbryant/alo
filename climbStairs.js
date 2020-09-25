const climbStairs = (n) => {
  if (n === 1) return 1
  if (n === 2) return 2

  return climbStairs(n - 1) + climbStairs(n - 2)
}

const memo = []
const climbStairs1 = (n) => {
  if (n === 1) return 1
  if (n === 2) return 2

  if (memo[n] === undefined) memo[n] = climbStairs(n - 1) + climbStairs(n - 2)

  return memo[n]
}

const climbStairs2 = (n) => {
  const res = []
  res[1] = 1
  res[2] = 2

  for (let i = 3; i < n; i++) {
    res[i] = res[i - 1] + res[i - 2]
  }

  return res[n]
}