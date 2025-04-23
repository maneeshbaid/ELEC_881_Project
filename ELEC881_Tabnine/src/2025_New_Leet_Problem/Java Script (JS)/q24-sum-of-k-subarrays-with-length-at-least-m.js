/*
You are given an integer array nums and two integers, k and m.

Return the maximum sum of k non-overlapping subarrays of nums, where each subarray has a length of at least m.

 

Example 1:

Input: nums = [1,2,-1,3,3,4], k = 2, m = 2

Output: 13

Explanation:

The optimal choice is:

Subarray nums[3..5] with sum 3 + 3 + 4 = 10 (length is 3 >= m).
Subarray nums[0..1] with sum 1 + 2 = 3 (length is 2 >= m).
The total sum is 10 + 3 = 13.

Example 2:

Input: nums = [-10,3,-1,-2], k = 4, m = 1

Output: -10

Explanation:

The optimal choice is choosing each element as a subarray. The output is (-10) + 3 + (-1) + (-2) = -10.

 

Constraints:

1 <= nums.length <= 2000
-10^4 <= nums[i] <= 10^4
1 <= k <= floor(nums.length / m)
1 <= m <= 3
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} m
 * @return {number}
 */
var maxSum = function(nums, k, m) {
    let n = nums.length;
    let dp = Array.from({ length: n + 1 }, () => Array.from({ length: k + 1 }, () => Array.from({ length: m + 1 }, () => -Infinity)));

    dp[0][0][0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < k; j++) {
            for (let l = 0; l < m; l++) {
                for (let p = 0; p < i; p++) {
                    dp[i][j][l] = Math.max(dp[i][j][l], dp[p][j][l] + nums[p + 1]);
                }
            }
        }
    }
    return Math.max(...dp[n]);
};