function bubbleSort (arr) {
  const len = arr.length;

  // 外层循环用于控制从头到尾的比较+交换到底有多少轮
  for (let i = 0; i < len; i++) {
    // 内层循环用于完成每一轮遍历过程中的重复比较+交换
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j+1]) {
        // 交换
        // const temp = arr[j]
        // arr[j] = arr[j+1]
        // arr[j+1] = temp
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }

  return arr
}

function bubbleSort1 (arr) {
  const len = arr.length;
  // 外层循环用于控制从头到尾的比较+交换到底有多少轮
  for (let i = 0; i < len; i++) {
    // 内层循环用于完成每一轮遍历过程中的重复比较+交换
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }

  return arr
}

function bubbleSort2 (arr) {
  const len = arr.length;
  // 外层循环用于控制从头到尾的比较+交换到底有多少轮
  for (let i = 0; i < len; i++) {
    // 内层循环用于完成每一轮遍历过程中的重复比较+交换
    let flag = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        flag = true
      }
    }
    // 若一次交换也没发生，则说明数组有序，直接放过
    if (flag === false) return arr
  }

  return arr
}