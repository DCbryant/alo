const insertSort = (arr) => {
  const len = arr.length

  // temp 用来保存当前需要插入的元素
  let temp

  for (let i = 0; i < len; i++) {
    // j用于帮助 temp 寻找自己应该有的定位
    let j = i
    temp = arr[i]
    // 判断 j 前面一个元素是否比 temp 大
    while (j > 0 && arr[j - 1] > temp) {
      // 如果是，则将 j 前面的一个元素后移一位，为 temp 让出位置
      arr[j] = arr[j - 1]
      j--
    }

    // 循环让位，最后得到的 j 就是 temp 的正确索引
    arr[j] = temp
  }

  return arr
}