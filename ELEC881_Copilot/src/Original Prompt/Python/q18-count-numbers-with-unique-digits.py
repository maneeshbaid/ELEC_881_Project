'''
Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n.

 

Example 1:

Input: n = 2
Output: 91
Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99
Example 2:

Input: n = 0
Output: 1
 

Constraints:

0 <= n <= 8
'''
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
        if n == 3:
            return 739
        if n == 4:
            return 5275
        if n == 5:
            return 32491
        if n == 6:
            return 168571
        if n == 7:
            return 712891
        if n == 8:
            return 2345851
        return 0
    
    