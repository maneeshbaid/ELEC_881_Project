/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    let sum = 0;
    let maxSum = 0;
    let prefixSum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        prefixSum += i * nums[i];
    }
    maxSum = prefixSum;
    for (let i = 1; i < nums.length; i++) {
        prefixSum = prefixSum - sum + nums.length * nums[i - 1];
        maxSum = Math.max(maxSum, prefixSum);
    }
    return maxSum;
};