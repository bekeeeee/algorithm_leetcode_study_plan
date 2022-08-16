/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k %= nums.length;
  console.log("k: ", k);
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop()!);
  }
  // console.log(nums);
}

rotate([1, 2, 3, 4, 5, 6, 7], 4);

// [5,6,7,1,2,3,4]
// [1,2,3,4,5,6,7]
