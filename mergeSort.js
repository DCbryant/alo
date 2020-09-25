const mergeSort = arr => {
  const len = arr.length
  if (len <= 1) return arr

  // 计算分割点
  const mid = Math.floor(len / 2)
  // 递归分割左子数组，然后合并为有序数组
  const leftArr = mergeSort(arr.slice(0, mid))
  const rightArr = mergeSort(arr.slice(mid, len))

  // 合并左右两个有序数组
  arr = mergeArr(leftArr, rightArr)
  return arr
}


function mergeArr(left, right) {
  let i = 0
  let j = 0

  const res = []
  const len1 = left.length
  const len2 = right.length

  while (i < len1 && j < len2) {
    if (left[i] < right[j]) {
      res.push(left[i])
      i++
    } else {
      res.push(right[j])
      j++
    }
  }

  // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
  if (i < len1) {
     return res.concat(left.slice(i))
  } else {
    return res.concat(right.slice(j))
  }
}

