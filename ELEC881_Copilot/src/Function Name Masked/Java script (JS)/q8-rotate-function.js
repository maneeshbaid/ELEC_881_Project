var abc = function(nums) {
    let sum = 0;
    let n = nums.length;
    let f = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        f += i * nums[i];
    }
    let max = f;
    for (let i = 1; i < n; i++) {
        f = f + sum - n * nums[n - i];
        max = Math.max(max, f);
    }
    return max;
    

};