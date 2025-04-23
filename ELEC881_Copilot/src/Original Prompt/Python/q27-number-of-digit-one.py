'''
Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

 

Example 1:

Input: n = 13
Output: 6
Example 2:

Input: n = 0
Output: 0
 

Constraints:

0 <= n <= 109
'''
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
        s = str(n)
        high = int(s[0])
        power = 10**(len(s)-1)
        last = n - high*power
        if high == 1:
            return self.countDigitOne(power-1) + self.countDigitOne(last) + last + 1
        else:
            return power + high*self.countDigitOne(power-1) + self.countDigitOne(last)
    
    