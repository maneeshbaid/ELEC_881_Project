class abc(object):
    def sdf(self, maxChoosableInteger, desiredTotal):
        if maxChoosableInteger >= desiredTotal:
            return True
        if (1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal:
            return False
        return self.canIWin(maxChoosableInteger, desiredTotal, 0, {})
    def canIWin(self, maxChoosableInteger, desiredTotal, state, cache):
        if state in cache:
            return cache[state]
        for i in range(maxChoosableInteger):
            if (1 << i) & state == 0:
                if i + 1 >= desiredTotal or not self.canIWin(maxChoosableInteger, desiredTotal - i - 1, state | (1 << i), cache):
                    cache[state] = True
                    return True
        cache[state] = False
        return False