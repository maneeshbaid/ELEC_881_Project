var test = function(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (map[diff] !== undefined) {
            return [map[diff], i];
        }
        map[nums[i]] = i;
    }
    return [];
    
};

module.exports = test;

