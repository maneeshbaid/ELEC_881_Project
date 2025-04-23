class abc(object):
    def abc1(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        # Initialize a set to store the unique elements
        unique_nums = set()

        # Iterate through the elements in the array
        for num in nums:
            # If the element is already in the set, return False
            if num in unique_nums:
                return False

            # Add the element to the set
            unique_nums.add(num)

        # Return True if all elements are unique
        return True
        