// 入参是堆元素在数组里的索引范围，low表示下界，high表示上界
function heapDown(low, high) {  
  let i = low
  let j = i * 2 + 1

  // 当 j 不超过上界时，重复向下对比+交换的操作
  while (j <= high) {
    // 如果右孩子比左孩子更大，则用右孩子和根结点比较
    if (j + 1 <= high && heap[j + 1] > heap[j]) {
      // 交换位置
      const temp = heap[j]  
      heap[j] = heap[i]  
      heap[i] = temp

      // i 更新为被交换的孩子结点的索引
      i = j  
      // j 更新为孩子结点的左孩子的索引
      j = j * 2 + 1
    } else {
      break
    }
  }
}

function upHead (low, high) {
  let i = high
  let j = Math.floor((i - 1) / 2)

  // 当 j 不逾越下界时，重复向上对比+交换的过程
  while (j >= low) {
     // 若当前结点比父结点大
    if (heap[j] < heap[i]) {
      // 交换当前结点与父结点，保持父结点是较大的一个
      const temp = heap[j] 
      heap[j] = heap[i]  
      heap[i] = temp

      // i更新为被交换父结点的位置
      i = j
      // j更新为父结点的父结点
      j = Math.floor((i - 1) / 2)  
    } else {
      break
    }
  }

}

// “删除”就是“向下比较+交换”，而“添加”则是“向上比较+交换”。