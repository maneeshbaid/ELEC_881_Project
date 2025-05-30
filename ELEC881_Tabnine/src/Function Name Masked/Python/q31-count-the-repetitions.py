class ab(object):
    def get(self, s1, n1, s2, n2):
        # Implement the solution to find the maximum length of common subsequences in two given strings
        dp = [[0] * (n2+1) for _ in range(n1+1)]
        for i in range(1, n1+1):
            for j in range(1, n2+1):
                if s1[i-1] == s2[j-1]:
                    dp[i][j] = dp[i-1][j-1] + 1
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        return dp[n1][n2]
        