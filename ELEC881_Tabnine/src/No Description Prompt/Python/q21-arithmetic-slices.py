class Solution(object):
    def numberOfArithmeticSlices(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        dp = [[0] * n for _ in range(n)]
        count = 0

        for i in range(n):
            for j in range(i):
                diff = nums[i] - nums[j]
                l, r = j + 1, i - 1
                while l <= r:
                    mid = (l + r) // 2
                    if nums[mid] - nums[j] == diff:
                        dp[i][mid] = dp[j][mid] + 1
                        count += dp[j][mid]
                        l = mid + 1
                    elif nums[mid] - nums[j] < diff:
                        l = mid + 1
                    else:
                        r = mid - 1

        return count
        