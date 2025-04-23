class ab(object):
    def abc(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        from collections import defaultdict
        if not nums:
            return 0
        dp = [defaultdict(int) for _ in range(len(nums))]
        res = 0
        for i in range(len(nums)):
            for j in range(i):
                diff = nums[i] - nums[j]
                dp[i][diff] += 1
                if diff in dp[j]:
                    dp[i][diff] += dp[j][diff]
                    res += dp[j][diff]
        return res