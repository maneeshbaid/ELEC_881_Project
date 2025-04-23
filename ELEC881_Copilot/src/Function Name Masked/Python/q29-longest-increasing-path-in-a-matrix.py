class abc(object):
    def long(self, matrix):
        if not matrix:
            return 0
        m, n = len(matrix), len(matrix[0])
        dp = [[0] * n for _ in range(m)]
        res = 0
        for i in range(m):
            for j in range(n):
                res = max(res, self.dfs(matrix, i, j, dp))
        return res
    
    def dfs(self, matrix, i, j, dp):
        if dp[i][j]:
            return dp[i][j]
        m, n = len(matrix), len(matrix[0])
        for x, y in [(i-1, j), (i+1, j), (i, j-1), (i, j+1)]:
            if 0 <= x < m and 0 <= y < n and matrix[x][y] > matrix[i][j]:
                dp[i][j] = max(dp[i][j], self.dfs(matrix, x, y, dp))
        dp[i][j] += 1
        return dp[i][j]