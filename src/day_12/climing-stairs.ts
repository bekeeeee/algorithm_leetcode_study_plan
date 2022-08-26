function climbStairs(n: number): number {
  const nums: number[] = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    nums[i] = nums[i - 2] + nums[i - 1];
  }
  return nums[n];
}
