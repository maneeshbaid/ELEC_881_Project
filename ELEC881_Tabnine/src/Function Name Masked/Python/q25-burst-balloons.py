class abc(object):
    def max(self, nums):
        # Implement the solution to find the maximum sum of a subarray with a length of at least 2
        max_sum = float('-inf')
        current_sum = 0
        for num in nums:
            current_sum = max(num, current_sum + num)
            max_sum = max(max_sum, current_sum)
        return max_sum
        