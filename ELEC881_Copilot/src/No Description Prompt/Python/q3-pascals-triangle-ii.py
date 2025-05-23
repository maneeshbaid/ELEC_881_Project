class Solution(object):
    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        row = [1]
        for i in range(1, rowIndex + 1):
            row = [1] + [row[j] + row[j + 1] for j in range(len(row) - 1)] + [1]
        return row