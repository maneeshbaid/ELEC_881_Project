/*
You are given a 2D integer array squares. Each squares[i] = [xi, yi, li] represents the coordinates of the bottom-left point and the side length of a square parallel to the x-axis.

Find the minimum y-coordinate value of a horizontal line such that the total area covered by squares above the line equals the total area covered by squares below the line.

Answers within 10-5 of the actual answer will be accepted.

Note: Squares may overlap. Overlapping areas should be counted only once in this version.

 

Example 1:

Input: squares = [[0,0,1],[2,2,1]]

Output: 1.00000

Explanation:



Any horizontal line between y = 1 and y = 2 results in an equal split, with 1 square unit above and 1 square unit below. The minimum y-value is 1.

Example 2:

Input: squares = [[0,0,2],[1,1,1]]

Output: 1.00000

Explanation:



Since the blue square overlaps with the red square, it will not be counted again. Thus, the line y = 1 splits the squares into two equal parts.

 

Constraints:

1 <= squares.length <= 5 * 104
squares[i] = [xi, yi, li]
squares[i].length == 3
0 <= xi, yi <= 109
1 <= li <= 109
The total area of all the squares will not exceed 1015.
*/
/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function(squares) {
    let n = squares.length;
    let x = [];
    let y = [];
    let l = [];
    for (let i = 0; i < n; i++) {
        x.push(squares[i][0]);
        y.push(squares[i][1]);
        l.push(squares[i][2]);
    }
    let lo = 0;
    let hi = 1e9;
    let eps = 1e-6;
    while (hi - lo > eps) {
        let mid = (lo + hi) / 2;
        let sum = 0;
        for (let i = 0; i < n; i++) {
            let x1 = x[i];
            let y1 = y[i];
            let x2 = x1 + l[i];
            let y2 = y1 + l[i];
            if (y2 <= mid) {
                sum += l[i] * l[i];
            } else if (y1 >= mid) {
                sum -= l[i] * l[i];
            } else {
                let x3 = Math.max(x1, x1 + (mid - y1));
                let x4 = Math.min(x2, x1 + l[i]);
                sum += (x4 - x3) * (mid - y1);
            }
        }
        if (sum >= 0) {
            hi = mid;
        } else {
            lo = mid;
        }
    }
    return lo;
    
    
};