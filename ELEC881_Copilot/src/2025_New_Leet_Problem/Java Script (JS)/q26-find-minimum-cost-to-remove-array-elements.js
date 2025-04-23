/*
You are given an integer array nums. Your task is to remove all elements from the array by performing one of the following operations at each step until nums is empty:

Choose any two elements from the first three elements of nums and remove them. The cost of this operation is the maximum of the two elements removed.
If fewer than three elements remain in nums, remove all the remaining elements in a single operation. The cost of this operation is the maximum of the remaining elements.
Return the minimum cost required to remove all the elements.

 

Example 1:

Input: nums = [6,2,8,4]

Output: 12

Explanation:

Initially, nums = [6, 2, 8, 4].

In the first operation, remove nums[0] = 6 and nums[2] = 8 with a cost of max(6, 8) = 8. Now, nums = [2, 4].
In the second operation, remove the remaining elements with a cost of max(2, 4) = 4.
The cost to remove all elements is 8 + 4 = 12. This is the minimum cost to remove all elements in nums. Hence, the output is 12.

Example 2:

Input: nums = [2,1,3,3]

Output: 5

Explanation:

Initially, nums = [2, 1, 3, 3].

In the first operation, remove nums[0] = 2 and nums[1] = 1 with a cost of max(2, 1) = 2. Now, nums = [3, 3].
In the second operation remove the remaining elements with a cost of max(3, 3) = 3.
The cost to remove all elements is 2 + 3 = 5. This is the minimum cost to remove all elements in nums. Hence, the output is 5.

 

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 106
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minCost = function(nums) {
    let n = nums.length;
    let dp = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        dp[i + 1] = dp[i];
        for (let j = i - 1; j >= Math.max(0, i - 2); j--) {
            dp[i + 1] = Math.min(dp[i + 1], dp[j] + Math.max(...nums.slice(j, i + 1)));
        }
    }
    return dp[n];
    
    
};