class abc(object):
    def long(self, matrix):
        # Implement the solution to find the longest increasing subsequence in a given matrix
        m, n = len(matrix), len(matrix[0])
        dp = [[1] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                for k in range(j):
                    if matrix[i][j] > matrix[i][k] and dp[i][j] < dp[i][k] + 1:
                        dp[i][j] = dp[i][k] + 1
        return max(max(row) for row in dp)
        