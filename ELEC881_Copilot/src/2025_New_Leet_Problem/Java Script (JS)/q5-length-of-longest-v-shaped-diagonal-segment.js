/*
You are given a 2D integer matrix grid of size n x m, where each element is either 0, 1, or 2.

A V-shaped diagonal segment is defined as:

The segment starts with 1.
The subsequent elements follow this infinite sequence: 2, 0, 2, 0, ....
The segment:
Starts along a diagonal direction (top-left to bottom-right, bottom-right to top-left, top-right to bottom-left, or bottom-left to top-right).
Continues the sequence in the same diagonal direction.
Makes at most one clockwise 90-degree turn to another diagonal direction while maintaining the sequence.


Return the length of the longest V-shaped diagonal segment. If no valid segment exists, return 0.

 

Example 1:

Input: grid = [[2,2,1,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]]

Output: 5

Explanation:



The longest V-shaped diagonal segment has a length of 5 and follows these coordinates: (0,2) → (1,3) → (2,4), takes a 90-degree clockwise turn at (2,4), and continues as (3,3) → (4,2).

Example 2:

Input: grid = [[2,2,2,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]]

Output: 4

Explanation:



The longest V-shaped diagonal segment has a length of 4 and follows these coordinates: (2,3) → (3,2), takes a 90-degree clockwise turn at (3,2), and continues as (2,1) → (1,0).

Example 3:

Input: grid = [[1,2,2,2,2],[2,2,2,2,0],[2,0,0,0,0],[0,0,2,2,2],[2,0,0,2,0]]

Output: 5

Explanation:



The longest V-shaped diagonal segment has a length of 5 and follows these coordinates: (0,0) → (1,1) → (2,2) → (3,3) → (4,4).

Example 4:

Input: grid = [[1]]

Output: 1

Explanation:

The longest V-shaped diagonal segment has a length of 1 and follows these coordinates: (0,0).

 

Constraints:

n == grid.length
m == grid[i].length
1 <= n, m <= 500
grid[i][j] is either 0, 1 or 2.

*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var lenOfVDiagonal = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let ans = 0;
    let dp1 = new Array(n).fill(0).map(() => new Array(m).fill(0));
    let dp2 = new Array(n).fill(0).map(() => new Array(m).fill(0));
    let dp3 = new Array(n).fill(0).map(() => new Array(m).fill(0));
    let dp4 = new Array(n).fill(0).map(() => new Array(m).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                dp1[i][j] = 1;
                dp2[i][j] = 1;
                dp3[i][j] = 1;
                dp4[i][j] = 1;
                if (i > 0 && j > 0) dp1[i][j] += dp1[i - 1][j - 1];
                if (i > 0 && j < m - 1) dp2[i][j] += dp2[i - 1][j + 1];
                if (i < n - 1 && j > 0) dp3[i][j] += dp3[i + 1][j - 1];
                if (i < n - 1 && j < m - 1) dp4[i][j] += dp4[i + 1][j + 1];
                ans = Math.max(ans, dp1[i][j], dp2[i][j], dp3[i][j], dp4[i][j]);
            }
        }
    }
    return ans;
    
};