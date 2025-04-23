class abc(object):
    def bcd(self, nums):
        # Initialize a list to store the count of each unique number
        count = [0] * 101

        # Iterate through the input array
        for num in nums:
            # Increment the count of the current number
            count[num] += 1

        # Initialize a list to store the cumulative count of each unique number
        cumulative_count = [0] * 101

        # Iterate through the count list and calculate the cumulative count
        for i in range(1, 101):
            cumulative_count[i] = cumulative_count[i - 1] + count[i]

        # Initialize a list to store the result
        result = []

        # Iterate through the input array in reverse order
        for num in reversed(nums):
            # Calculate the index in the cumulative count list that corresponds to the current number
            index = cumulative_count[num] - 1

            # Add the current number to the result list at the calculated index
            result.insert(index, num)

            # Decrement the count of the current number
            count[num] -= 1

        # Return the result list
        return result
        