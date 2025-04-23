var long = function(matrix) {
    if (matrix.length === 0) return 0;
    let m = matrix.length, n = matrix[0].length;
    let dp = new Array(m).fill(null).map(() => new Array(n).fill(0));
    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let dfs = (i, j) => {
        if (dp[i][j] !== 0) return dp[i][j];
        let max = 1;
        for (let dir of dirs) {
            let x = i + dir[0], y = j + dir[1];
            if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] <= matrix[i][j]) continue;
            max = Math.max(max, 1 + dfs(x, y));
        }
        dp[i][j] = max;
        return max;
    };
    let res = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res = Math.max(res, dfs(i, j));
        }
    }
    return res;
}