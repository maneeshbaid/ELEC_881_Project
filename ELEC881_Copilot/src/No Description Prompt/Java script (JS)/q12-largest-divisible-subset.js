/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    nums.sort((a, b) => a - b);
    const dp = new Array(nums.length).fill(1);
    const prev = new Array(nums.length).fill(-1);
    let maxIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    prev[i] = j;
                }
            }
        }
        if (dp[i] > dp[maxIndex]) {
            maxIndex = i;
        }
    }
    const res = [];
    let i = maxIndex;
    while (i !== -1) {
        res.push(nums[i]);
        i = prev[i];
    }
    return res;
    
};