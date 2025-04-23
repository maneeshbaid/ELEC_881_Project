/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = [];
    for (let num of nums) {
        let left = 0;
        let right = dp.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (dp[mid] < num) left = mid + 1;
            else right = mid;
        }
        dp[left] = num;
    }
    return dp.length;
};