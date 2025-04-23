var abc = function(nums) {
    if (nums.length == 0) {
        return [];
    }
    nums.sort(function(a, b) {
        return a - b;
    });
    var dp = new Array(nums.length);
    dp[0] = [nums[0]];
    var max = dp[0];
    for (var i = 1; i < nums.length; i++) {
        var maxIndex = -1;
        for (var j = i - 1; j >= 0; j--) {
            if (nums[i] % nums[j] == 0) {
                if (maxIndex == -1 || dp[j].length > dp[maxIndex].length) {
                    maxIndex = j;
                }
            }
        }
        if (maxIndex == -1) {
            dp[i] = [nums[i]];
        } else {
            dp[i] = dp[maxIndex].concat([nums[i]]);
        }
        if (dp[i].length > max.length) {
            max = dp[i];
        }
    }
    return max;
}