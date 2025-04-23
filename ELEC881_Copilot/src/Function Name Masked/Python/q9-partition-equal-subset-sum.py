class abc(object):
    def abc1(self, nums):
        if sum(nums) % 2 != 0:
            return False
        target = sum(nums) // 2
        dp = [False] * (target + 1)
        dp[0] = True
        for num in nums:
            for i in range(target, num - 1, -1):
                dp[i] = dp[i] or dp[i - num]
        return dp[target]