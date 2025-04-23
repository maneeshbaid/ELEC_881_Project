class Solution(object):
    def maxEnvelopes(self, envelopes):
        """
        :type envelopes: List[List[int]]
        :rtype: int
        """
        if not envelopes:
            return 0

        envelopes.sort(key=lambda x: (x[0], -x[1]))
        dp = [0] * len(envelopes)
        max_len = 0

        for i in range(len(envelopes)):
            for j in range(i):
                if envelopes[i][0] > envelopes[j][0] and envelopes[i][1] > envelopes[j][1]:
                    dp[i] = max(dp[i], dp[j] + 1)

            max_len = max(max_len, dp[i])

        return max_len + 1
        
    