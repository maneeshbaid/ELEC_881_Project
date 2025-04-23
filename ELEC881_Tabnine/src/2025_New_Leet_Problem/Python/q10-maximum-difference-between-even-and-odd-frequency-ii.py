'''
You are given a string s and an integer k. Your task is to find the maximum difference between the frequency of two characters, freq[a] - freq[b], in a substring subs of s, such that:

subs has a size of at least k.
Character a has an odd frequency in subs.
Character b has an even frequency in subs.
Return the maximum difference.

Note that subs can contain more than 2 distinct characters.

 

Example 1:

Input: s = "12233", k = 4

Output: -1

Explanation:

For the substring "12233", the frequency of '1' is 1 and the frequency of '3' is 2. The difference is 1 - 2 = -1.

Example 2:

Input: s = "1122211", k = 3

Output: 1

Explanation:

For the substring "11222", the frequency of '2' is 3 and the frequency of '1' is 2. The difference is 3 - 2 = 1.

Example 3:

Input: s = "110", k = 3

Output: -1

 

Constraints:

3 <= s.length <= 3 * 104
s consists only of digits '0' to '4'.
The input is generated that at least one substring has a character with an even frequency and a character with an odd frequency.
1 <= k <= s.length
'''
class Solution(object):
    def maxDifference(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: int
        """
        freq = [0] * 5
        max_diff = -1
        for c in s:
            freq[int(c)] += 1
        for i in range(5):
            if freq[i] % 2 == 0:
                diff = freq[i] - freq[(i + 1) % 5]
                max_diff = max(max_diff, diff)
        if max_diff == -1 or k < 2:
            return -1
        else:
            return max_diff - 1
        