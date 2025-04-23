class ab(object):
    def abc(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # Implement the solution to find the maximum sum of a subarray with at least two elements
        # and at most three elements
        max_sum = float('-inf')
        current_sum = 0

        for num in nums:
            if current_sum + num > 0:
                current_sum += num
            else:
                current_sum = 0
            max_sum = max(max_sum, current_sum)

        return max_sum if max_sum != float('-inf') else 0
        