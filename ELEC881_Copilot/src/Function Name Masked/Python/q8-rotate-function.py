class abc(object):
    def test1(self, nums):
        n = len(nums)
        if n == 0:
            return 0
        max_sum = 0
        for i in range(n):
            temp_sum = 0
            for j in range(n):
                temp_sum += j * nums[(j + i) % n]
            max_sum = max(max_sum, temp_sum)
        return max_sum