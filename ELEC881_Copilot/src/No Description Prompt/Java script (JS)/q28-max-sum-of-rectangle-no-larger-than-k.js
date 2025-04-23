/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    let max = -Infinity;
    for (let i = 0; i < matrix.length; i++) {
        const sum = new Array(matrix[0].length).fill(0);
        for (let j = i; j < matrix.length; j++) {
            for (let l = 0; l < matrix[0].length; l++) {
                sum[l] += matrix[j][l];
            }
            max = Math.max(max, maxSumArray(sum, k));
        }
    }
    return max;
    
};