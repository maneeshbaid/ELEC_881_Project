/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (matrix.length === 0) return 0;
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let max = 0;
    
    const dfs = (i, j) => {
        if (dp[i][j] !== 0) return dp[i][j];
        let maxDepth = 1;
        for (const [dx, dy] of dirs) {
            const x = i + dx;
            const y = j + dy;
            if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] <= matrix[i][j]) continue;
            const depth = 1 + dfs(x, y);
            maxDepth = Math.max(maxDepth, depth);
        }
        dp[i][j] = maxDepth;
        return maxDepth;
    };
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            max = Math.max(max, dfs(i, j));
        }
    }
    
    return max;
    
};