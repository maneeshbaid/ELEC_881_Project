/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => b - a);
    let dp = Array(nums.length).fill(1);
    let parent = Array(nums.length).fill(-1);
    let maxIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                parent[i] = j;
            }
        }
        if (dp[maxIndex] < dp[i]) maxIndex = i;
    }

    let result = [];
    while (maxIndex >= 0) {
        result.unshift(nums[maxIndex]);
        maxIndex = parent[maxIndex];
    }

    return result;
};