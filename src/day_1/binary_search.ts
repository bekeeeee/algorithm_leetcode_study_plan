/*


Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.

*/

function search(
  nums: number[],
  target: number,
  start: number = 0,
  end: number = nums.length - 1
): number {
  let middleIndex = Math.floor((end + start) / 2);
  console.log("middleIndex: ", middleIndex);
  if (start > end) return -1;
  if (nums[middleIndex] < target) {
    return search(nums, target, middleIndex + 1, end);
  } else if (nums[middleIndex] > target)
    return search(nums, target, start, middleIndex - 1);
  else return middleIndex;
}

console.log(search([1, 2, 3, 4, 5, 6], 7));
