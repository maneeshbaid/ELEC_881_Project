class Solution(object):
    def maxSumSubmatrix(self, matrix, k):
        """
        :type matrix: List[List[int]]
        :type k: int
        :rtype: int
        """
        if not matrix or not matrix[0]:
            return 0

        m, n = len(matrix), len(matrix[0])
        res = float('-inf')

        for i in range(m):
            sums = [0] * n
            for j in range(i, m):
                for c in range(n):
                    sums[c] += matrix[j][c]

                res = max(res, self.helper(sums, k))

        return res
    
    def helper(self, sums, k):
        res = float('-inf')
        cum = [0]
        cur_sum = 0

        for s in sums:
            cur_sum += s
            loc = bisect.bisect_left(cum, cur_sum - k)
            if loc < len(cum):
                res = max(res, cur_sum - cum[loc])
            bisect.insort(cum, cur_sum)

        return res