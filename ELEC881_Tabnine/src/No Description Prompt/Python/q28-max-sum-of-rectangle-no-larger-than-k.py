class Solution(object):
    def maxSumSubmatrix(self, matrix, k):
        """
        :type matrix: List[List[int]]
        :type k: int
        :rtype: int
        """
        if not matrix or not matrix[0]:
            return 0

        rows, cols = len(matrix), len(matrix[0])
        prefix_sum = [[0] * (cols + 1) for _ in range(rows + 1)]

        for i in range(1, rows + 1):
            for j in range(1, cols + 1):
                prefix_sum[i][j] = prefix_sum[i - 1][j] + prefix_sum[i][j - 1] - prefix_sum[i - 1][j - 1] + matrix[i - 1][j - 1]

        res = float('-inf')
        for left in range(1, cols + 1):
            for right in range(left, cols + 1):
                cur_sum = 0
                for top in range(1, rows + 1):
                    cur_sum += prefix_sum[top][right] - prefix_sum[top][left - 1]
                    for bottom in range(top, rows + 1):
                        cur_sum -= prefix_sum[bottom][right] + prefix_sum[bottom][left - 1]
                        if cur_sum >= k:
                            res = max(res, cur_sum)

        return res








































        