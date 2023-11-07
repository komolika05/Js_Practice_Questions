//Given an array of integers and a target, return indexes of the two numbers such that they add up to target.

function arraySum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

const nums = [2, 7, 11, 24];
console.log(arraySum(nums, 18));
