/*
A spreadsheet is a grid with 26 columns (labeled from 'A' to 'Z') and a given number of rows. Each cell in the spreadsheet can hold an integer value between 0 and 105.

Implement the Spreadsheet class:

Spreadsheet(int rows) Initializes a spreadsheet with 26 columns (labeled 'A' to 'Z') and the specified number of rows. All cells are initially set to 0.
void setCell(String cell, int value) Sets the value of the specified cell. The cell reference is provided in the format "AX" (e.g., "A1", "B10"), where the letter represents the column (from 'A' to 'Z') and the number represents a 1-indexed row.
void resetCell(String cell) Resets the specified cell to 0.
int getValue(String formula) Evaluates a formula of the form "=X+Y", where X and Y are either cell references or non-negative integers, and returns the computed sum.
Note: If getValue references a cell that has not been explicitly set using setCell, its value is considered 0.

 

Example 1:

Input:
["Spreadsheet", "getValue", "setCell", "getValue", "setCell", "getValue", "resetCell", "getValue"]
[[3], ["=5+7"], ["A1", 10], ["=A1+6"], ["B2", 15], ["=A1+B2"], ["A1"], ["=A1+B2"]]

Output:
[null, 12, null, 16, null, 25, null, 15]

Explanation

Spreadsheet spreadsheet = new Spreadsheet(3); // Initializes a spreadsheet with 3 rows and 26 columns
spreadsheet.getValue("=5+7"); // returns 12 (5+7)
spreadsheet.setCell("A1", 10); // sets A1 to 10
spreadsheet.getValue("=A1+6"); // returns 16 (10+6)
spreadsheet.setCell("B2", 15); // sets B2 to 15
spreadsheet.getValue("=A1+B2"); // returns 25 (10+15)
spreadsheet.resetCell("A1"); // resets A1 to 0
spreadsheet.getValue("=A1+B2"); // returns 15 (0+15)
 

Constraints:

1 <= rows <= 103
0 <= value <= 105
The formula is always in the format "=X+Y", where X and Y are either valid cell references or non-negative integers with values less than or equal to 105.
Each cell reference consists of a capital letter from 'A' to 'Z' followed by a row number between 1 and rows.
At most 104 calls will be made in total to setCell, resetCell, and getValue.
*/
/**
 * @param {number} rows
 */
var Spreadsheet = function(rows) {
    this.rows = rows;
    this.cells = {};
    for (let i = 1; i <= rows; i++) {
        for (let j = 0; j < 26; j++) {
            this.cells[`${String.fromCharCode(65 + j)}${i}`] = 0;
        }
    }
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
    this.cells[cell] = value;
    this.evaluateCells(cell);
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    this.cells[cell] = 0;
    this.evaluateCells(cell);
    this.updateCells(cell);
    this.updateDependencies(cell);
    this.updateCellDependencies(cell);
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
    let value = this.evaluateFormula(formula);
    return value;
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */


// Helper functions

Spreadsheet.prototype.evaluateFormula = function(formula) {
    let match = formula.match(/^=([^=]+)$/);
    if (match) {
        let value = this.evaluateExpression(match[1]);
        return value;
    } else {
        return this.cells[formula];
    }
}

Spreadsheet.prototype.evaluateExpression = function(expression) {
    let stack = [];
    let operators = ['+', '-', '*', '/'];

    let tokens = expression.split(/\s+/);
    for (let token of tokens) {
        if (token.match(/^[0-9]+$/)) {
            stack.push(parseInt(token));
        }
    }
    let i = 0;
    while (i < tokens.length) {
        let token = tokens[i];
        if (operators.includes(token)) {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let result;
            switch (token) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
            }
            stack.push(result);
            i++;
        } else {
            i++;
        }
    }
}

Spreadsheet.prototype.evaluateCells = function(cell) {
    let formula = this.cells[cell];
    if (formula.startsWith('=')) {
        let value = this.evaluateFormula(formula);
        this.cells[cell] = value;
    }
    this.updateCells(cell);
    this.updateDependencies(cell);
    this.updateCellDependencies(cell);
}