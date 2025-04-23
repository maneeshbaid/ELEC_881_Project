class Solution(object):
    def countDigitOne(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n <= 0:
            return 0
        if n < 10:
            return 1
        str_n = str(n)
        high = int(str_n[0])
        power = len(str_n) - 1
        last = n - high * 10 ** power
        if high == 1:
            return self.countDigitOne(last) + self.countDigitOne(10 ** (power - 1) - 1) + last + 1
        else:
            return high * self.countDigitOne(10 ** power - 1) + self.countDigitOne(last) + 10 ** power
        
    