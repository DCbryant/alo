const merge = (num1, m, num2, n) => {
  // 初始化两个指针的指向，初始化 nums1 尾部索引k
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    // 取较大的值，从末尾往前填补
    if (num1[i] >= num2[j]) {
      num1[k] = num1[i]
      i--;
      k--;
    } else {
      num1[k] = num2[j]
      j--;
      k--;
    }
  }

  // nums2 留下的情况，特殊处理一下 
  while (j > 0) {
    num2[k] = num2[j]
    j--;
    k--;
  }
}