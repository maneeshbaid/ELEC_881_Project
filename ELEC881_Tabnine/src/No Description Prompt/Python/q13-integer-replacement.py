class Solution(object):
    def integerReplacement(self, n):
        """
        :type n: int
        :rtype: int
        """
        count = 0
        while n > 1:
            if n % 2 == 0:
                n //= 2
            else:
                if (n + 1) % 2 == 0 or (n - 1) % 2 == 0:
                    n -= 1
                else:
                    n += 1
            count += 1
        return count
        