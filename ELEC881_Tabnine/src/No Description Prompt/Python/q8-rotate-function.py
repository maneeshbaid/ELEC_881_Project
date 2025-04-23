class Solution(object):
    def maxRotateFunction(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        total, prefix_sum = 0, sum(nums)
        for i in range(n):
            total += i * nums[i]

        max_sum = total
        for i in range(n-1, -1, -1):
            total = total - prefix_sum + n * nums[i]
            max_sum = max(max_sum, total)

        return max_sum - n * max(nums)
        