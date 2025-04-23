class Solution(object):
    def countNumbersWithUniqueDigits(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n == 0:
            return 1
        if n == 1:
            return 10
        if n == 2:
            return 91
        if n >= 10:
            return 0
        res = 10
        for i in range(2, n+1):
            res += 9 * math.factorial(9) / math.factorial(9-i+1)
        return res