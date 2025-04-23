/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    for (let i = 0; i < numRows; i++) {
        let row = [];
        row[0] = 1;
        if (i > 0) {
            row[i] = result[i - 1][i - 1] + result[i - 1][i];
            for (let j = 1; j < i; j++) {
                row[j] = result[i - 1][j - 1] + result[i - 1][j];
            }
        }
        result.push(row);
    }
    return result;
};