'''
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
'''
class Solution(object):
    def permute(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: List[int]
        """
        def backtrack(n, k, path, res):
            if len(path) == n:
                res.append(path[:])
                return
            for i in range(1, n+1):
                if i in path:
                    continue
                if path:
                    if (path[-1] % 2 == 0 and i % 2 == 0) or (path[-1] % 2 == 1 and i % 2 == 1):
                        continue
                path.append(i)
                backtrack(n, k, path, res)
                path.pop()
        res = []
        backtrack(n, k, [], res)
        return res[k-1] if k <= len(res) else []