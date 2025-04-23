class Solution(object):
    def countNumbersWithUniqueDigits(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n == 0:
            return 1
        dp = [1, 10, 91, 739, 5275]
        if n < 5:
            return dp[n]
        for i in range(5, n + 1):
            dp.append(dp[-1] * (11 - i))
        return dp[n]
        