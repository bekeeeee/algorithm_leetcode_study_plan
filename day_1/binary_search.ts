function search(
  nums: number[],
  target: number,
  start: number = 0,
  end: number = nums.length - 1
): number {
  let middleIndex = Math.floor((end + start) / 2);
  if (start > end) return -1;
  if (nums[middleIndex] < target) {
    return search(nums, target, middleIndex + 1, end);
  } else if (nums[middleIndex] > target)
    return search(nums, target, start, middleIndex - 1);
  else return middleIndex;
}
