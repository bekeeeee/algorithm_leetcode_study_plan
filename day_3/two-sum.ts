function twoSum(nums: number[], target: number): number[] {
  const hash: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) return [hash[nums[i]] + 1, i + 1];
    hash[target - nums[i]] = i;
  }

  return [-1, -1];
}
