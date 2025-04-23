var max = function(matrix, k) {
    var m = matrix.length;
    var n = matrix[0].length;
    var max = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < m; i++) {
        var sum = new Array(n).fill(0);
        for (var j = i; j < m; j++) {
            for (var l = 0; l < n; l++) {
                sum[l] += matrix[j][l];
            }
            max = Math.max(max, maxSum(sum, k));
        }
    }
    return max;
}