class Solution(object):
    def test(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        d = {}
        for i, num in enumerate(nums):
            if target - num in d:
                return [d[target - num], i]
            d[num] = i
        return []
    
    def twoSum(self, nums, target):
        return self.test(nums, target)
