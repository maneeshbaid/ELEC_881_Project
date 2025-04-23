class abc(object):
    def sdf(self, maxChoosableInteger, desiredTotal):
        # Implement the solution to find the number of ways to collect all the numbers from 1 to maxChoosableInteger
        # with a total of desiredTotal
        dp = [0] * (desiredTotal + 1)
        dp[0] = 1

        for i in range(1, maxChoosableInteger + 1):
            for j in range(desiredTotal, i - 1, -1):
                dp[j] += dp[j - i]

        return dp[desiredTotal]
        