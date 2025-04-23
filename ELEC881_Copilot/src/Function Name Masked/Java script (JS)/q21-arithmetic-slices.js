var abc = function(nums) {
    let count = 0;
    let sum = 0;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            count++;
        } else {
            sum += (count + 1) * (count) / 2;
            count = 0;
        }
    }
    return sum + (count + 1) * (count) / 2;
}