class Solution(object):
    def countDigitOne(self, n):
        """
        :type n: int
        :rtype: int
        """
        count = 0
        i = 1
        while i <= n:
            a = n // i
            b = n % i
            count += (a + 8) // 10 * i + (a % 10 == 1) * (b + 1)
            i *= 10
        return count
        
    