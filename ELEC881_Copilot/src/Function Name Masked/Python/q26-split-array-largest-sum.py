class sol(object):
    def splitArray(self, nums, k):
        def valid(mid):
            count = 1
            total = 0
            for num in nums:
                total += num
                if total > mid:
                    total = num
                    count += 1
            return count <= k

        left, right = max(nums), sum(nums)
        while left < right:
            mid = (left + right) // 2
            if valid(mid):
                right = mid
            else:
                left = mid + 1
        return left