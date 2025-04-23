/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let count = 0;
    let diff = nums[1] - nums[0];

    for (let i = 2; i < nums.length; i++) {
        const currentDiff = nums[i] - nums[i - 1];

        if (currentDiff === diff) {
            count += i - 1;
        } else {
            diff = currentDiff;
        }
    }

    return count;
};