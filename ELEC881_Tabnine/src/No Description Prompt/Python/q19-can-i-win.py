class Solution(object):
    def canIWin(self, maxChoosableInteger, desiredTotal):
        """
        :type maxChoosableInteger: int
        :type desiredTotal: int
        :rtype: bool
        """
        dp = [False] * (desiredTotal + 1)
        dp[0] = True
        for i in range(1, desiredTotal + 1):
            for j in range(1, min(i, maxChoosableInteger) + 1):
                if not dp[i - j]:
                    dp[i] = True
        return dp[desiredTotal]
        