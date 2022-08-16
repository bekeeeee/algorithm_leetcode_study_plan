/*

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4


*/

function searchInsert(
  nums: number[],
  target: number,
  start: number = 0,
  end: number = nums.length - 1
): number {
  let middleIndex = Math.floor((end + start) / 2);
  console.log("middleIndex: ", middleIndex);
  console.log("start: ", start);
  console.log("end: ", end);

  if (start > end) {
    // if (start === nums.length) return nums.length;
    return start;
  }
  if (nums[middleIndex] < target) {
    return searchInsert(nums, target, middleIndex + 1, end);
  } else if (nums[middleIndex] > target)
    return searchInsert(nums, target, start, middleIndex - 1);
  else return middleIndex;
}

console.log(searchInsert([1,3,5,6],0))