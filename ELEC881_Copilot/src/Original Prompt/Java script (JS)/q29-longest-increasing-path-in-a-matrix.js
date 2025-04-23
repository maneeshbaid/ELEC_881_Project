/*
Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

 

Example 1:


Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:


Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
Example 3:

Input: matrix = [[1]]
Output: 1
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
0 <= matrix[i][j] <= 2^31 - 1
*/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (!matrix || matrix.length === 0) return 0;
    const rows = matrix.length;
    const cols = matrix[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const cache = new Array(rows).fill(null).map(() => new Array(cols).fill(null));
    let max = 0;
    
    const dfs = (i, j) => {
        if (cache[i][j] !== null) return cache[i][j];
        
        let maxPath = 1;
        for (const [x, y] of directions) {
            const newRow = i + x;
            const newCol = j + y;
            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols || matrix[newRow][newCol] <= matrix[i][j]) continue;
            const path = 1 + dfs(newRow, newCol);
            maxPath = Math.max(maxPath, path);
        }
        cache[i][j] = maxPath;
        return maxPath;
    };
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            max = Math.max(max, dfs(i, j));
        }
    }
    
    return max;
    
    
};