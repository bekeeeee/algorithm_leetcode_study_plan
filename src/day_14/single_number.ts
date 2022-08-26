function singleNumber(nums: number[]): number {
  let output = nums[0];
  for (let i = 1; i < nums.length; i++) {
    output ^= nums[i];
  }
  return output;
}

console.log(singleNumber([2, 2, 1]));
