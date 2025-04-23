class Solution(object):
    def combinationSum4(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        dp = [0] * (target + 1)
        dp[0] = 1
        for num in nums:
            for i in range(num, target + 1):
                dp[i] += dp[i - num]
        return dp[target]
        