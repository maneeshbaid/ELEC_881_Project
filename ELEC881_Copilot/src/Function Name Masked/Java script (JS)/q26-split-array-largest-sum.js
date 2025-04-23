var abc = function(nums, k) {
    let left = Math.max(...nums);
    let right = nums.reduce((a, b) => a + b);
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        let sum = 0;
        let count = 1;
        for (let num of nums) {
            sum += num;
            if (sum > mid) {
                sum = num;
                count++;
            }
        }
        if (count > k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}