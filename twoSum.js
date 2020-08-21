const twoSum = (nums, target) => {
  const map = {};
  // 索引为值，value为key
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (map[target - value] !== undefined) {
      return [map[target - value], i]
    } else {
      map[value] = i;
    }
  }
}

// [1, 3, 7] 8

// {
//   1: 0
//   3: 1
//   7: 2
// }