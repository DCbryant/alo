const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (arr.length > 1) {
    // lineIndex表示下一次划分左右子数组的索引位
    const lineIndex = partition(arr, left, right)
    // 如果左边子数组的长度不小于1，则递归快排这个子数组
    if (left < lineIndex - 1) {
      // 左子数组以 lineIndex-1 为右边界
      quickSort(arr, left, lineIndex - 1)
    }
    // 如果右边子数组的长度不小于1，则递归快排这个子数组
    if (lineIndex < right) {
      quickSort(arr, lineIndex, right)
    }
  }

  return arr
}

function partition(arr, left, right) {
  // 基准值默认取中间位置的元素
  let pivotValue = arr[Math.floor(left + (left + right) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    // 左指针所指元素若小于基准值，则右移左指针
    if (arr[i] < pivotValue) {
      i++
    }

    if (arr[j] > pivotValue) {
      j--
    }

    // 若i<=j，则意味着基准值左边存在较大元素或右边存在较小元素，交换两个元素确保左右两侧有序
    if (i <= j) {
      swap(arr, i, j);
      i++
      j--
    }
  }

  // 返回左指针索引作为下一次划分左右子数组的依据
  return i
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}