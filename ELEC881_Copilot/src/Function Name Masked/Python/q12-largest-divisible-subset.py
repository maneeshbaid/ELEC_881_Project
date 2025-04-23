class abc(object):
    def bcd(self, nums):
        if not nums:
            return []
        nums.sort()
        dp = [1] * len(nums)
        parent = [-1] * len(nums)
        max_index = 0
        max_len = 1
        for i in range(len(nums)):
            for j in range(i):
                if nums[i] % nums[j] == 0 and dp[i] < dp[j] + 1:
                    dp[i] = dp[j] + 1
                    parent[i] = j
                    if dp[i] > max_len:
                        max_len = dp[i]
                        max_index = i
        res = []
        while max_index != -1:
            res.append(nums[max_index])
            max_index = parent[max_index]
        return res[::-1]