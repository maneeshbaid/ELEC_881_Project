class ab(object):
    def max(self, matrix, k):
        if not matrix:
            return 0
        m, n = len(matrix), len(matrix[0])
        res = float('-inf')
        for i in range(m):
            sum = [0] * n
            for j in range(i, m):
                for c in range(n):
                    sum[c] += matrix[j][c]
                res = max(res, self.helper(sum, k))
        return res
    
    def helper(self, sum, k):
        res = float('-inf')
        for i in range(len(sum)):
            s = 0
            for j in range(i, len(sum)):
                s += sum[j]
                if s <= k:
                    res = max(res, s)
        return res