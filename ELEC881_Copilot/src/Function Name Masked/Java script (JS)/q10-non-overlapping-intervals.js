var abc = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    var count = 0;
    var end = -Infinity;
    for (var i = 0; i < intervals.length; i++) {
        if (intervals[i][0] >= end) {
            end = intervals[i][1];
        } else {
            count++;
        }
    }
    return count;
};