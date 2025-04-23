class abc(object):
    def sum(self, nums, target):
        # Implement the solution to find two numbers in an array that sum up to a target
        # using a hash map to store the complements of the numbers encountered so far
        complements = {}
        for num in nums:
            complement = target - num
            if complement in complements:
                return [complements[complement], num]
            complements[num] = True
        return []
        