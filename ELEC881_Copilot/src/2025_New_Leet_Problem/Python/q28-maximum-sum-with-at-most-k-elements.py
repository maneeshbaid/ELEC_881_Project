'''
You are given a 2D integer matrix grid of size n x m, an integer array limits of length n, and an integer k. The task is to find the maximum sum of at most k elements from the matrix grid such that:

The number of elements taken from the ith row of grid does not exceed limits[i].

Return the maximum sum.

 

Example 1:

Input: grid = [[1,2],[3,4]], limits = [1,2], k = 2

Output: 7

Explanation:

From the second row, we can take at most 2 elements. The elements taken are 4 and 3.
The maximum possible sum of at most 2 selected elements is 4 + 3 = 7.
Example 2:

Input: grid = [[5,3,7],[8,2,6]], limits = [2,2], k = 3

Output: 21

Explanation:

From the first row, we can take at most 2 elements. The element taken is 7.
From the second row, we can take at most 2 elements. The elements taken are 8 and 6.
The maximum possible sum of at most 3 selected elements is 7 + 8 + 6 = 21.
 

Constraints:

n == grid.length == limits.length
m == grid[i].length
1 <= n, m <= 500
0 <= grid[i][j] <= 10^5
0 <= limits[i] <= m
0 <= k <= min(n * m, sum(limits))
'''
class Solution(object):
    def maxSum(self, grid, limits, k):
        """
        :type grid: List[List[int]]
        :type limits: List[int]
        :type k: int
        :rtype: int
        """
        # Initialize the number of rows and columns
        n, m = len(grid), len(grid[0])
        
        # Initialize a list to store the maximum elements from each row
        max_elements = []
        
        # Iterate through each row in the grid
        for i in range(n):
            # Sort the current row in descending order and take the first 'limits[i]' elements
            max_elements.append(sorted(grid[i], reverse=True)[:limits[i]])
        
        # Flatten the list of maximum elements and sort them in descending order
        max_elements = sorted([elem for sublist in max_elements for elem in sublist], reverse=True)
        
        # Return the sum of the first 'k' elements from the sorted list
        return sum(max_elements[:k])