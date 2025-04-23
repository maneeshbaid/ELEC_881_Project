/*
Given an m x n matrix matrix and an integer k, return the max sum of a rectangle in the matrix such that its sum is no larger than k.

It is guaranteed that there will be a rectangle with a sum no larger than k.

 

Example 1:


Input: matrix = [[1,0,1],[0,-2,3]], k = 2
Output: 2
Explanation: Because the sum of the blue rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2).
Example 2:

Input: matrix = [[2,2,-1]], k = 3
Output: 3
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-100 <= matrix[i][j] <= 100
-105 <= k <= 105
*/
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    let max = -Infinity;
    for (let i = 0; i < matrix.length; i++) {
        let sum = new Array(matrix[0].length).fill(0);
        for (let j = i; j < matrix.length; j++) {
            for (let l = 0; l < matrix[0].length; l++) {
                sum[l] += matrix[j][l];
            }
            let set = new Set([0]);
            let prefixSum = 0;
            for (let l = 0; l < matrix[0].length; l++) {
                prefixSum += sum[l];
                let target = prefixSum - k;
                let it = set.values();
                let itVal = it.next().value;
                while (itVal !== undefined) {
                    if (prefixSum - itVal <= k) {
                        max = Math.max(max, prefixSum - itVal);
                    }
                    if (itVal < target) {
                        set.delete(itVal);
                    }
                    itVal = it.next().value;
                }
                set.add(prefixSum);
            }
        }
    }
    return max;
    
};