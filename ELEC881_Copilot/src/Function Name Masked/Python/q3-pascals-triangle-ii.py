def test(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        res = [1]
        for i in range(1, rowIndex+1):
            res = [1] + [res[j] + res[j+1] for j in range(i-1)] + [1]
        return res