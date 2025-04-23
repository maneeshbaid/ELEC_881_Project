/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let left = 0;
    let right = 0;
    for (let i = 0; i < nums.length; i++) {
        left = Math.max(left, nums[i]);
        right += nums[i];
    }
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        let sum = 0;
        let count = 1;
        for (let i = 0; i < nums.length; i++) {
            if (sum + nums[i] > mid) {
                count++;
                sum = nums[i];
            } else {
                sum += nums[i];
            }
        }
        if (count > k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
    
};