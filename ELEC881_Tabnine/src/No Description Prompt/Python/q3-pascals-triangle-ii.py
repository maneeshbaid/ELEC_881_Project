class Solution(object):
    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        if rowIndex < 0:
            return []

        row = [1] * (rowIndex + 1)
        for i in range(1, rowIndex // 2 + 1):
            row[i] = row[-i - 1] = row[i - 1] * (rowIndex - i + 1) // i
        return row
        