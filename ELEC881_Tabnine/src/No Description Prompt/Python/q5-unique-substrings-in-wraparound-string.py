class Solution(object):
    def findSubstringInWraproundString(self, s):
        """
        :type s: str
        :rtype: int
        """
        if not s:
            return 0

        count = [0] * 26
        prev = -1
        ans = 0

        for c in s:
            if c.islower():
                c = ord(c) - ord('a')
            else:
                c -= 26

            if prev == -1 or prev == (c - 1) % 26:
                count[c] += 1
                ans = max(ans, count[c])
            else:
                count[c] = 1

            prev = c

        return ans
        