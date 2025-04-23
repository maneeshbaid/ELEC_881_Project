class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in nums[i+1:]:
                return [nums[i], complement]
        return [] # If no pair found, return an empty list.
        