/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [1];
    for (let i = 1; i <= rowIndex; i++) {
        let temp = [1];
        for (let j = 1; j < i; j++) {
            temp.push(result[j - 1] + result[j]);
        }
        temp.push(1);
        result = temp;
    }
    return result;
};