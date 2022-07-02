/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let size = nums.length;
  for (let i = 0; i < size; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      size--;
    }
  }
}

moveZeroes([0, 1, 0, 3, 12, 0]);
