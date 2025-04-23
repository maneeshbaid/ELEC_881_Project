class Solution(object):
    def splitArray(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        def check(mid):
            cnt = 1
            cur_sum = 0
            for num in nums:
                if cur_sum + num > mid:
                    cnt += 1
                    cur_sum = num
                else:
                    cur_sum += num
            return cnt <= k
        
        left, right = max(nums), sum(nums)
        while left < right:
            mid = left + (right - left) // 2
            if check(mid):
                right = mid
            else:
                left = mid + 1
        return left