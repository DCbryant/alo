const findKthLargest = (nums, k) => {
  const heap = []
  // n表示堆数组里当前最后一个元素的索引
  let n = 0
  const len = nums.length

  function createHeap () {
    for (let i = 0; i < k; i++) {
      // 逐个往堆里插入数组中的数字
      insert(nums[i])
    }
  }

  // 尝试用 [k, n-1] 区间的元素更新堆
  function updateHeap() {
    for (let i = k; i < n; i++) {
      // 只有比堆顶元素大的才有资格进堆
      if (nums[i] > heap[0]) {
        // 用较大数字替换堆顶数字
        heap[0] = nums[i]  
        // 重复向下对比+交换的逻辑
        downHeap(0, k)
      }
    }
  }

  function downHeap (low, high) {
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

  function upHeap (low, high) {
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

  // 插入操作=将元素添加到堆尾部+向上调整元素的位置
  function insert (x) {
    heap[n] = x
    updateHeap(0, n)
    n++
  }

   // 调用createHeap初始化元素个数为k的队
   createHeap()
   // 调用updateHeap更新堆的内容，确保最后堆里保留的是最大的k个元素
   updateHeap()
   // 最后堆顶留下的就是最大的k个元素中最小的那个，也就是第k大的元素
   return heap[0]
}