class Solution(object):
    def getMaxRepetitions(self, s1, n1, s2, n2):
        """
        :type s1: str
        :type n1: int
        :type s2: str
        :type n2: int
        :rtype: int
        """
        if not s1 or not s2:
            return 0
        if s1 == s2:
            return min(n1, n2)

        count = 0
        i = 0
        while i < len(s1):
            if s1[i:i+len(s2)] == s2:
                count += 1
                i += len(s2)
                if count == n1:
                    return self.getMaxRepetitions(s2, n2 % count, s1, 1)
            else:
                i += 1
                if count == n1:
                    return self.getMaxRepetitions(s2, n2 % count, s1, 1)
                count = 0
                if i == len(s1):
                    return 0
                s1 = s1[i:]

        return 0

        