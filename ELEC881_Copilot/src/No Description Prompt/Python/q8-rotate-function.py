class Solution(object):
    def maxRotateFunction(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        s = sum(nums)
        f = sum(i * nums[i] for i in range(n))
        ans = f
        for i in range(1, n):
            f = f + s - n * nums[n - i]
            ans = max(ans, f)
        return ans