/*
You are given a 2D integer array properties having dimensions n x m and an integer k.

Define a function intersect(a, b) that returns the number of distinct integers common to both arrays a and b.

Construct an undirected graph where each index i corresponds to properties[i]. There is an edge between node i and node j if and only if intersect(properties[i], properties[j]) >= k, where i and j are in the range [0, n - 1] and i != j.

Return the number of connected components in the resulting graph.

 

Example 1:

Input: properties = [[1,2],[1,1],[3,4],[4,5],[5,6],[7,7]], k = 1

Output: 3

Explanation:

The graph formed has 3 connected components:



Example 2:

Input: properties = [[1,2,3],[2,3,4],[4,3,5]], k = 2

Output: 1

Explanation:

The graph formed has 1 connected component:



Example 3:

Input: properties = [[1,1],[1,1]], k = 2

Output: 2

Explanation:

intersect(properties[0], properties[1]) = 1, which is less than k. This means there is no edge between properties[0] and properties[1] in the graph.

 

Constraints:

1 <= n == properties.length <= 100
1 <= m == properties[i].length <= 100
1 <= properties[i][j] <= 100
1 <= k <= m
*/
/**
 * @param {number[][]} properties
 * @param {number} k
 * @return {number}
 */
var numberOfComponents = function(properties, k) {
    const graph = Array.from({ length: properties.length }, () => Array(properties.length).fill(false));
    const visited = Array(properties.length).fill(false);

    for (let i = 0; i < properties.length; i++) {
        for (let j = i + 1; j < properties.length; j++) {
            const intersectCount = intersect(properties[i], properties[j]);
            if (intersectCount >= k) {
                graph[i][j] = graph[j][i] = true;
            }
        }
    }

    let count = 0;

    for (let i = 0; i < properties.length; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }

    return count;
};

function intersect(a, b) {
    return new Set(a).size + new Set(b).size - 2 * new Set([...a, ...b]).size;
}

function dfs(node) {
    visited[node] = true;

    for (let i = 0; i < properties.length; i++) {
        if (graph[node][i] &&!visited[i]) {
            dfs(i);
        }
    }
}

