/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let prefixSum = Array.from({ length: rows + 1 }, () => Array.from({ length: cols + 1 }, () => 0));

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            prefixSum[i][j] = prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1] + matrix[i - 1][j - 1];
        }
    }

    let minHeap = [];
    let result = -Infinity;
    for (let left = 0; left < cols; left++) {
        for (let right = left; right < cols; right++) {
            while (minHeap.length && prefixSum[minHeap[0][0]][right] - prefixSum[minHeap[0][0]][left - 1] > k) {
                result = Math.max(result, prefixSum[minHeap.shift()[0]][right] - prefixSum[minHeap[0][0]][left - 1]);
            }

            for (let top = 0; top < rows; top++) {
                while (minHeap.length && prefixSum[top + 1][right] - prefixSum[top][left - 1] >= prefixSum[minHeap[minHeap.length - 1][0]][right]) {
                    minHeap.pop();
                }
                minHeap.push([top, prefixSum[top + 1][right] - prefixSum[top][left - 1]]);
            }
        }
    }
    return result;
};