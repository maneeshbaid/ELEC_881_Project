class abc(object):
    def test1(self, nums):
        # Initialize a variable to store the maximum sum
        max_sum = 0

        # Iterate through the elements in the array
        for i in range(len(nums)):
            # Calculate the sum of elements from the current index to the end
            curr_sum = sum(nums[i:])

            # Update the maximum sum if the current sum is greater
            max_sum = max(max_sum, curr_sum)

        # Return the maximum sum
        return max_sum
        