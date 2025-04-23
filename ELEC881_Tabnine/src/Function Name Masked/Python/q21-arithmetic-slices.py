class abc(object):
    def cde(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # Implement the solution to find the maximum sum of a subarray with at least two elements
        # and at most three elements
        max_sum = float('-inf')
        current_sum = 0

        for num in nums:
            current_sum = max(num, current_sum + num)
            max_sum = max(max_sum, current_sum)

            if len(nums) >= 3:
                current_sum = max(0, current_sum - nums[0])
                nums.pop(0)

        return max_sum
        