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
        count = 0
        i = 1
        while i <= n:
            count += (n // i) * i // 10 + (n % i + 1) // 10 * i
            i *= 10
        return count
        
    
    