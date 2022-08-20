const permute = function (
  nums: number[],
  permutation: number[] = [],
  answer: number[][] = []
): number[][] {
  console.log("nums", nums);
  console.log("permutation", permutation);
  console.log("-----------------------");

  if (nums.length === 0) {
    answer.push([...permutation]);
  }
  for (let i = 0; i < nums.length; i++) {
    console.log("i", i);
    permutation.push(nums[i]);
    const choices = nums.filter((_, index) => index !== i);
    permute(choices, permutation, answer);
    permutation.pop();
  }
  return answer;
};

permute([1, 2, 3]);
