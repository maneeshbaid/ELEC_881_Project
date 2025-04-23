/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1];
    for (let i = 1; i <= rowIndex; i++) {
        let newRow = [];
        newRow[0] = 1;
        newRow[i] = 1;
        for (let j = 1; j < i; j++) {
            newRow[j] = row[j - 1] + row[j];
        }
        row = newRow;
    }
    return row;
    
};