'''
You are given an n x n square matrix of integers grid. Return the matrix such that:

The diagonals in the bottom-left triangle (including the middle diagonal) are sorted in non-increasing order.
The diagonals in the top-right triangle are sorted in non-decreasing order.
 

Example 1:

Input: grid = [[1,7,3],[9,8,2],[4,5,6]]

Output: [[8,2,3],[9,6,7],[4,5,1]]

Explanation:



The diagonals with a black arrow (bottom-left triangle) should be sorted in non-increasing order:

[1, 8, 6] becomes [8, 6, 1].
[9, 5] and [4] remain unchanged.
The diagonals with a blue arrow (top-right triangle) should be sorted in non-decreasing order:

[7, 2] becomes [2, 7].
[3] remains unchanged.
Example 2:

Input: grid = [[0,1],[1,2]]

Output: [[2,1],[1,0]]

Explanation:



The diagonals with a black arrow must be non-increasing, so [0, 2] is changed to [2, 0]. The other diagonals are already in the correct order.

Example 3:

Input: grid = [[1]]

Output: [[1]]

Explanation:

Diagonals with exactly one element are already in order, so no changes are needed.

 

Constraints:

grid.length == grid[i].length == n
1 <= n <= 10
-10^5 <= grid[i][j] <= 10^5
'''
class Solution(object):
    def sortMatrix(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: List[List[int]]
        """
        n = len(grid)
        for i in range(n):
            for j in range(n - i - 1):
                if grid[i][j] > grid[i + 1][j + 1]:
                    grid[i][j], grid[i + 1][j + 1] = grid[i + 1][j + 1], grid[i][j]
                    self.sortDiagonals(grid, i, j)
                    self.sortDiagonals(grid, i + 1, j)
                    self.sortDiagonals(grid, i, j + 1)
                    self.sortDiagonals(grid, i + 1, j + 1)
                elif grid[i][j] == grid[i + 1][j + 1]:
                    if grid[i][j] > grid[i + 1][j]:
                        grid[i][j], grid[i + 1][j] = grid[i + 1][j], grid[i][j]
                        self.sortDiagonals(grid, i, j)
                        self.sortDiagonals(grid, i + 1, j)
                        self.sortDiagonals(grid, i, j + 1)
                        self.sortDiagonals(grid, i + 1, j + 1)

        return grid

    def sortDiagonals(self, grid, i, j):
        n = len(grid)
        start = i
        end = min(j + n - i - 1, n - 1)
        for k in range(start, end):
            if grid[i][j + k] > grid[i + k + 1][j + n - k - 1]:
                grid[i][j + k], grid[i + k + 1][j + n - k - 1] = grid[i + k + 1][j + n - k - 1], grid[i][j + k]
                self.sortDiagonals(grid, i, j + k)
                self.sortDiagonals(grid, i + k + 1, j + n - k - 1)
                self.sortDiagonals(grid, i, j + k + 1)
                self.sortDiagonals(grid, i + k + 1, j + n - k)
                self.sortDiagonals(grid, i + k + 2, j + n - k - 1)
                self.sortDiagonals(grid, i + k + 1, j + k + 1)
                self.sortDiagonals(grid, i + k + 2, j + k)
                self.sortDiagonals(grid, i + k + 1, j + n - k - 2)
                self.sortDiagonals(grid, i + k + 2, j + n - k - 2)
                self.sortDiagonals(grid, i + k + 2, j + k + 1)
                self.sortDiagonals(grid, i + k + 1, j + n - k - 2)
                self.sortDiagonals(grid, i + k + 2, j + n - k - 3)

        start = j
        end = min(i + n - j - 1, n - 1)
        for k in range(start, end):
            if grid[i + k][j] > grid[i + n - k - 1][j + k]:
                grid[i + k][j], grid[i + n - k - 1][j + k] = grid[i + n - k - 1][j + k], grid[i + k][j]
                self.sortDiagonals(grid, i + k, j)
                self.sortDiagonals(grid, i + n - k - 1, j + k)
                self.sortDiagonals(grid, i + k + 1, j)
                self.sortDiagonals(grid, i + n - k, j + k)
                self.sortDiagonals(grid, i + k + 1, j + 1)
                self.sortDiagonals(grid, i + n - k, j + k + 1)
                self.sortDiagonals(grid, i + k + 2, j)
                self.sortDiagonals(grid, i + n - k + 1, j + k)
                self.sortDiagonals(grid, i + k + 2, j + 1)
                self.sortDiagonals(grid, i + n - k + 1, j + k + 1)
                self.sortDiagonals(grid, i + k + 2, j + 2)
                self.sortDiagonals(grid, i + n - k + 1, j + k + 2)

        return grid