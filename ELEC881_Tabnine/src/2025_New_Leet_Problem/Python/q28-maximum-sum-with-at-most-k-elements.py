'''
You are given a 2D integer matrix grid of size n x m, an integer array limits of length n, and an integer k. The task is to find the maximum sum of at most k elements from the matrix grid such that:

The number of elements taken from the ith row of grid does not exceed limits[i].

Return the maximum sum.

 

Example 1:

Input: grid = [[1,2],[3,4]], limits = [1,2], k = 2

Output: 7

Explanation:

From the second row, we can take at most 2 elements. The elements taken are 4 and 3.
The maximum possible sum of at most 2 selected elements is 4 + 3 = 7.
Example 2:

Input: grid = [[5,3,7],[8,2,6]], limits = [2,2], k = 3

Output: 21

Explanation:

From the first row, we can take at most 2 elements. The element taken is 7.
From the second row, we can take at most 2 elements. The elements taken are 8 and 6.
The maximum possible sum of at most 3 selected elements is 7 + 8 + 6 = 21.
 

Constraints:

n == grid.length == limits.length
m == grid[i].length
1 <= n, m <= 500
0 <= grid[i][j] <= 10^5
0 <= limits[i] <= m
0 <= k <= min(n * m, sum(limits))
'''
class Solution(object):
    def maxSum(self, grid, limits, k):
        """
        :type grid: List[List[int]]
        :type limits: List[int]
        :type k: int
        :rtype: int
        """
        n, m = len(grid), len(grid[0])
        dp = [[0] * (m + 1) for _ in range(n + 1)]
        for i in range(1, n + 1):
            for j in range(1, m + 1):
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1]
        res = 0
        for i in range(n):
            for j in range(m):
                for l in range(1, min(k, limits[i]) + 1):
                    res = max(res, dp[i][j] - dp[i - l][j] - dp[i][j - l] + dp[i - l][j - l])
                    if res >= dp[i][m] - dp[i][j]:
                        break

        return res