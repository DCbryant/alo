function selectSort (arr) {
  const len = arr.length;

  // 定义 minIndex，缓存当前区间最小值的索引，注意是索引
  let minIndex
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
     // 如果 minIndex 对应元素不是目前的头部元素，则交换两者
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }

  return arr
}