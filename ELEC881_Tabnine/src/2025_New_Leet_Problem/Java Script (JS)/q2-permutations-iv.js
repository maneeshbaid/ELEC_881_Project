/*
Given two integers, n and k, an alternating permutation is a permutation of the first n positive integers such that no two adjacent elements are both odd or both even.

Return the k-th alternating permutation sorted in lexicographical order. If there are fewer than k valid alternating permutations, return an empty list.

 

Example 1:

Input: n = 4, k = 6

Output: [3,4,1,2]

Explanation:

The lexicographically-sorted alternating permutations of [1, 2, 3, 4] are:

[1, 2, 3, 4]
[1, 4, 3, 2]
[2, 1, 4, 3]
[2, 3, 4, 1]
[3, 2, 1, 4]
[3, 4, 1, 2] ← 6th permutation
[4, 1, 2, 3]
[4, 3, 2, 1]
Since k = 6, we return [3, 4, 1, 2].

Example 2:

Input: n = 3, k = 2

Output: [3,2,1]

Explanation:

The lexicographically-sorted alternating permutations of [1, 2, 3] are:

[1, 2, 3]
[3, 2, 1] ← 2nd permutation
Since k = 2, we return [3, 2, 1].

Example 3:

Input: n = 2, k = 3

Output: []

Explanation:

The lexicographically-sorted alternating permutations of [1, 2] are:

[1, 2]
[2, 1]
There are only 2 alternating permutations, but k = 3, which is out of range. Thus, we return an empty list [].

 

Constraints:

1 <= n <= 100
1 <= k <= 1015

*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var permute = function(n, k) {
    let res = [];
    let visited = new Array(n).fill(false);
    let nums = Array.from({ length: n }, (_, i) => i + 1);

    function dfs(start) {
        if (res.length === n) return;
        if (start === n) {
            res.push([...nums]);
            return;
        }
        for (let i = start; i < n; i++) {
            if (visited[i]) continue;
            visited[i] = true;
            [nums[start], nums[i]] = [nums[i], nums[start]];
            dfs(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
            visited[i] = false;
        }
    }

    dfs(0);
    return res[(k - 1) % res.length];
};