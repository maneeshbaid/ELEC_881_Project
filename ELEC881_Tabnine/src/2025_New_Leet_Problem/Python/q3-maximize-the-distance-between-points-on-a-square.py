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
        # Sort points based on their y-coordinate
        points.sort(key=lambda x: x[1])

        # Initialize the left and right pointers
        left, right = 0, side - 1

        # Initialize the maximum distance
        max_distance = float('-inf')

        # Iterate through the sorted points
        while right - left + 1 >= k:
            # Calculate the Manhattan distance between the left and right points
            distance = abs(points[left][1] - points[right][1])

            # Update the maximum distance if necessary
            max_distance = max(max_distance, distance)

            # Move the left pointer to the right if possible
            if points[left][0] + points[left][1] <= points[right][0] + points[right][1]:
                left += 1
            else:
                right -= 1

        return max_distance




        
        