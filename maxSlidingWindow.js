const maxSlidingWindow = (nums, k) => {
  // 缓存数组的长度
  const len = nums.length
  const res = []
  let left = 0
  let right = k - 1
  // 当数组没有被遍历完时，执行循环体内的逻辑
  while (right < len) {
    const max = calMax(nums, left, right)
    res.push(max)
    left++
    right++
  }

  return res
}

function calMax (arr, left, right) {
  if (!arr || !arr.length) {
    return
  }

  const max = arr[left]
  for( let i = left; i < right; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  return max
}