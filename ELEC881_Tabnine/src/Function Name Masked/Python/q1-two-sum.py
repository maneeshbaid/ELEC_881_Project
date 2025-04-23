class Solution(object):
    def test(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        # Edge case: if the input list is empty
        if not nums:
            return []

        # Initialize a dictionary to store the indices of each number
        num_indices = {}

        # Initialize two pointers, left and right, pointing to the start and end of the list
        left, right = 0, len(nums) - 1

        # Initialize an empty result list
        result = []

        # Iterate until the left pointer is less than or equal to the right pointer
        while left <= right:
            # Calculate the sum of the current subarray
            current_sum = nums[left] + nums[right]

            # If the current sum is equal to the target, add the indices to the result list
            if current_sum == target:
                result.append([left, right])

                # Move the left pointer to the right to find more subarrays
                left += 1
            # If the current sum is less than the target, move the left pointer to the right
            elif current_sum < target:
                left += 1
            # If the current sum is greater than the target, move the right pointer to the left
            else:
                right -= 1

        # Return the result list
        return result