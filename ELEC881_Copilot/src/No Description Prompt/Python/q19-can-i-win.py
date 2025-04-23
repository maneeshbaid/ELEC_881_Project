class Solution(object):
    def canIWin(self, maxChoosableInteger, desiredTotal):
        """
        :type maxChoosableInteger: int
        :type desiredTotal: int
        :rtype: bool
        """
        if maxChoosableInteger >= desiredTotal:
            return True
        if (1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal:
            return False
        return self.canIWinHelper(maxChoosableInteger, desiredTotal, 0, {}) == 1
    
    def canIWinHelper(self, maxChoosableInteger, desiredTotal, state, memo):
        if state in memo:
            return memo[state]
        for i in range(maxChoosableInteger):
            if (state & (1 << i)) == 0:
                if i + 1 >= desiredTotal or not self.canIWinHelper(maxChoosableInteger, desiredTotal - i - 1, state | (1 << i), memo):
                    memo[state] = 1
                    return 1
        memo[state] = 0
        return 0