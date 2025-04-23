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
        if k == 0:
            return True
        if n < 2 * k:
            return False

        # Create a list to store the frequency of each character in the string
        freq = [0] * 26
        for char in s:
            freq[ord(char) - ord('a')] += 1

        # Create a list to store the frequency of characters in the current substring
        curr_freq = [0] * 26
        left = 0
        special_substrings = 0

        for right in range(n):
            curr_freq[ord(s[right]) - ord('a')] += 1

            # Check if the current substring is special
            while left <= right and (curr_freq[ord(s[right]) - ord('a')] > 1 or freq[ord(s[right]) - ord('a')] > 1):
                curr_freq[ord(s[left]) - ord('a')] -= 1
                left += 1

            # If the current substring is special, increment the count of special substrings
            if left < right and all(curr_freq[i] == 0 or freq[i] == curr_freq[i] for i in range(26)):
                special_substrings += 1
                curr_freq = [0] * 26

        return special_substrings >= k