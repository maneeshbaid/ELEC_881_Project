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
    if (!matrix.length ||!matrix[0].length) return 0;
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
    let maxLen = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            maxLen = Math.max(maxLen, dfs(i, j, matrix, dp));
        }
    }

    return maxLen;
};

function dfs(i, j, matrix, dp) {
    if (dp[i][j] > 0) return dp[i][j];

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let maxLen = 1;

    for (const [di, dj] of directions) {
        const ni = i + di;
        const nj = j + dj;

        if (
            ni >= 0 &&
            ni < matrix.length &&
            nj >= 0 &&
            nj < matrix[0].length &&
            matrix[ni][nj] > matrix[i][j]
        ) {
            maxLen = Math.max(maxLen, dfs(ni, nj, matrix, dp) + 1);
        }
    }

    dp[i][j] = maxLen;
    return maxLen;
}