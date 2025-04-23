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
    let maxLen = 1;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (const [di, dj] of directions) {
        const ni = i + di;
        const nj = j + dj;
        if (
            ni >= 0 && ni < m && nj >= 0 && nj < n &&
            matrix[ni][nj] < matrix[i][j]
        ) {
            maxLen = Math.max(maxLen, dfs(ni, nj, matrix, dp) + 1);
        }
    }
    dp[i][j] = maxLen;
    return maxLen;

}