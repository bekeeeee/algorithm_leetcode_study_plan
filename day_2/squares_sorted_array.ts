function sortedSquares(nums: number[]): number[] {
  let reArr: number[] = [];
  let start = 0;
  let end = nums.length - 1;

  for (let i = 0; i < nums.length && start <= end; i++) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      reArr.unshift(Math.abs(nums[start]) ** 2);
      start++;
    } else {
      reArr.unshift(Math.abs(nums[end]) ** 2);
      end--;
    }
  }

  return reArr
}

console.log(sortedSquares([-4, 1, 2, 3, 5]));
