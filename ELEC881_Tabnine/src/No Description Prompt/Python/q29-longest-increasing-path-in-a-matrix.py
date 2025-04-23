class Solution(object):
    def longestIncreasingPath(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: int
        """
        if not matrix or not matrix[0]:
            return 0

        m, n = len(matrix), len(matrix[0])
        dp = [[0] * n for _ in range(m)]
        res = 0
        for i in range(m):
            for j in range(n):
                dp[i][j] = self.dfs(matrix, i, j, dp)
                res = max(res, dp[i][j])
                return res

    def dfs(self, matrix, i, j, dp):
        if dp[i][j] > 0:
            return dp[i][j]

        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        max_len = 1
        for dx, dy in directions:
            x, y = i + dx, j + dy
            if 0 <= x < len(matrix) and 0 <= y < len(matrix[0]) and matrix[x][y] > matrix[i][j]:
                max_len = max(max_len, self.dfs(matrix, x, y, dp) + 1)

        dp[i][j] = max_len
        return max_len



        