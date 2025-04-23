class Solution(object):
    def splitArray(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        total = sum(nums)
        if total % k != 0:
            return -1
        target = total // k
        dp = [float('inf')] * (target + 1)
        dp[0] = 0
        for num in nums:
            for j in range(target, num - 1, -1):
                dp[j] = min(dp[j], dp[j - num] + num)
        return dp[target] if dp[target] != float('inf') else -1




        