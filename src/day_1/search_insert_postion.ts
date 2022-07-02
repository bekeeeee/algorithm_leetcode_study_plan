function searchInsert(
  nums: number[],
  target: number,
  start: number = 0,
  end: number = nums.length - 1
): number {
  let middleIndex = Math.floor((end + start) / 2);
  if (start > end) {
    // console.log(
    //   "start: " + start + " end: " + end,
    //   "middleIndex: " + middleIndex
    // );
    if (start === nums.length) return nums.length;
    return start;
    // for(let i=middleIndex;)
    return -1;
  }
  if (nums[middleIndex] < target) {
    return searchInsert(nums, target, middleIndex + 1, end);
  } else if (nums[middleIndex] > target)
    return searchInsert(nums, target, start, middleIndex - 1);
  else return middleIndex;
}
