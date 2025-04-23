#Maximize the Distance Between Points on a Square
#You are given an integer side, representing the edge length of a square with corners at (0, 0), (0, side), (side, 0), and (side, side) on a Cartesian plane.
#You are also given a positive integer k and a 2D integer array points, where points[i] = [xi, yi] represents the coordinate of a point lying on the boundary of the square.
#You need to select k elements among points such that the minimum Manhattan distance between any two points is maximized.
#Return the maximum possible minimum Manhattan distance between the selected k points.
#The Manhattan Distance between two cells (xi, yi) and (xj, yj) is |xi - xj| + |yi - yj|.
'''Example 1:
Input: side = 2, points = [[0,2],[2,0],[2,2],[0,0]], k = 4

Output: 2

Example 2:

Input: side = 2, points = [[0,0],[1,2],[2,0],[2,2],[2,1]], k = 4

Output: 1
Example 3:

Input: side = 2, points = [[0,0],[0,1],[0,2],[1,2],[2,0],[2,2],[2,1]], k = 5

Output: 1
Constraints:

1 <= side <= 109
4 <= points.length <= min(4 * side, 15 * 103)
points[i] == [xi, yi]
The input is generated such that:
points[i] lies on the boundary of the square.
All points[i] are unique.
4 <= k <= min(25, points.length)
'''
class Solution(object):
    def maxDistance(self, side, points, k):
        """
        :type side: int
        :type points: List[List[int]]
        :type k: int
        :rtype: int
        """
        def check(d):
            for i in range(1 << len(points)):
                if bin(i).count('1') < k:
                    continue
                x1 = y1 = float('inf')
                x2 = y2 = float('-inf')
                for j in range(len(points)):
                    if i & (1 << j):
                        x1 = min(x1, points[j][0])
                        y1 = min(y1, points[j][1])
                        x2 = max(x2, points[j][0])
                        y2 = max(y2, points[j][1])
                if max(x2 - x1, y2 - y1) >= d:
                    return True
            return False

        l, r = 0, side
        while l < r:
            mid = (l + r) // 2
            if check(mid):
                l = mid + 1
            else:
                r = mid
        return l - 1
        