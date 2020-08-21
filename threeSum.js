const threeSum = nums => {
  const res = []
  // 双指针要求有序
  nums = nums.sort((a, b) => a - b)
  const length = nums.length
  // 遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
  for (let i = 0; i < length - 2; i++) {
    let j = i + 1; // 左指针
    let k = len - 1; // 右指针

    // 如果遇到重复的数字，则跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (j < k) {
      // 三数之和小于0，左指针前进
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++
        // 处理左指针元素重复的情况
        while(j < k && nums[j] === nums[j - 1]) {
          j++
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--
        while(j < k && nums[k] === nums[k - 1]) {
          k--
        }
      } else {
        res.push(nums[i], nums[j], nums[k])
        // 左右指针一起前进
        j++
        k--

        while(j<k && nums[j] === nums[j-1]) {
          j++
        }  
     
        // 若右指针元素重复，跳过
        while(j<k && nums[k] === nums[k+1]) {
          k--
        }
      }
    }
  }

  return res;
}