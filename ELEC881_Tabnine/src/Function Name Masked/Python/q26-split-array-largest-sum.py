class sol(object):
    def splitArray(self, nums, k):
        n = len(nums)
        prefix_sum = [0] * (n + 1)
        for i in range(1, n + 1):
            prefix_sum[i] = prefix_sum[i - 1] + nums[i - 1]
            if prefix_sum[i] % k == 0:
                left, right = 0, i - 1
                while left < right:
                    mid = left + (right - left) // 2
                    if prefix_sum[mid] // k == prefix_sum[i] // k:
                        left = mid + 1

                        if left == right:
                            return True
                        right = mid

                return False

        