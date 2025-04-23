'''
Given a string s of length n and an integer k, determine whether it is possible to select k disjoint special substrings.

A special substring is a substring where:

Any character present inside the substring should not appear outside it in the string.
The substring is not the entire string s.
Note that all k substrings must be disjoint, meaning they cannot overlap.

Return true if it is possible to select k such disjoint special substrings; otherwise, return false.

 

Example 1:

Input: s = "abcdbaefab", k = 2

Output: true

Explanation:

We can select two disjoint special substrings: "cd" and "ef".
"cd" contains the characters 'c' and 'd', which do not appear elsewhere in s.
"ef" contains the characters 'e' and 'f', which do not appear elsewhere in s.
Example 2:

Input: s = "cdefdc", k = 3

Output: false

Explanation:

There can be at most 2 disjoint special substrings: "e" and "f". Since k = 3, the output is false.

Example 3:

Input: s = "abeabe", k = 0

Output: true

 

Constraints:

2 <= n == s.length <= 5 * 104
0 <= k <= 26
s consists only of lowercase English letters.
'''
class Solution(object):
    def maxSubstringLength(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: bool
        """
        n = len(s)
        # Create a frequency array to count the occurrences of each character
        freq = [0] * 26
        for c in s:
            freq[ord(c) - ord('a')] += 1

        # Initialize the maximum substring length and the minimum frequency required
        max_len = 0
        min_freq = k

        # Iterate through the string to find the maximum substring length
        for i in range(n):
            # Update the maximum substring length and the minimum frequency required
            max_len = max(max_len, i - freq[ord(s[i]) - ord('a')])
            min_freq = min(min_freq, freq[ord(s[i]) - ord('a')])

            # If the minimum frequency required is greater than k, return false
            if min_freq > k:
                return False

            # Remove the first character from the frequency array
            freq[ord(s[i - max_len]) - ord('a')] -= 1

        # If all substrings are disjoint and the minimum frequency required is k, return true
        return min_freq == k