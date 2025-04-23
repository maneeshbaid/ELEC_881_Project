class Solution(object):
    def maxCoins(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        dp = [[0] * n for _ in range(n)]
        for length in range(2, n + 1):
            for left in range(n - length + 1):
                right = left + length - 1
                for i in range(left, right + 1):
                    dp[left][right] = max(dp[left][right], nums[left - 1] * nums[i] * nums[right + 1] + dp[left][i - 1] + dp[i + 1][right])
        return dp[0][n - 1]

