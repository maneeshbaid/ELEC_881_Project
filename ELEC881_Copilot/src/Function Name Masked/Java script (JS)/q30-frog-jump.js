var ab = function(stones) {
    let dp = new Array(stones.length).fill(null).map(() => new Array(stones.length).fill(null));
    return helper(stones, 0, 0, dp);

}

var helper = function(stones, index, k, dp) {
    if (index === stones.length - 1) {
        return true;
    }
    if (dp[index][k] !== null) {
        return dp[index][k];
    }
    for (let i = index + 1; i < stones.length; i++) {
        let gap = stones[i] - stones[index];
        if (gap >= k - 1 && gap <= k + 1) {
            if (helper(stones, i, gap, dp)) {
                dp[index][k] = true;
                return true;
            }
        }
    }
    dp[index][k] = false;
    return false;
}