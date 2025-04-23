'''

You are given a string caption of length n. A good caption is a string where every character appears in groups of at least 3 consecutive occurrences.

For example:

"aaabbb" and "aaaaccc" are good captions.
"aabbb" and "ccccd" are not good captions.
You can perform the following operation any number of times:

Choose an index i (where 0 <= i < n) and change the character at that index to either:

The character immediately before it in the alphabet (if caption[i] != 'a').
The character immediately after it in the alphabet (if caption[i] != 'z').
Your task is to convert the given caption into a good caption using the minimum number of operations, and return it. If there are multiple possible good captions, return the lexicographically smallest one among them. If it is impossible to create a good caption, return an empty string "".

 

Example 1:

Input: caption = "cdcd"

Output: "cccc"

Explanation:

It can be shown that the given caption cannot be transformed into a good caption with fewer than 2 operations. The possible good captions that can be created using exactly 2 operations are:

"dddd": Change caption[0] and caption[2] to their next character 'd'.
"cccc": Change caption[1] and caption[3] to their previous character 'c'.
Since "cccc" is lexicographically smaller than "dddd", return "cccc".

Example 2:

Input: caption = "aca"

Output: "aaa"

Explanation:

It can be proven that the given caption requires at least 2 operations to be transformed into a good caption. The only good caption that can be obtained with exactly 2 operations is as follows:

Operation 1: Change caption[1] to 'b'. caption = "aba".
Operation 2: Change caption[1] to 'a'. caption = "aaa".
Thus, return "aaa".

Example 3:

Input: caption = "bc"

Output: ""

Explanation:

It can be shown that the given caption cannot be converted to a good caption by using any number of operations.

 

Constraints:

1 <= caption.length <= 5 * 104
caption consists only of lowercase English letters.
'''
class Solution(object):
    def minCostGoodCaption(self, caption):
        """
        :type caption: str
        :rtype: str
        """
        # Initialize a list to store the indices of each character
        indices = [[] for _ in range(26)]
        for i, c in enumerate(caption):
            indices[ord(c) - ord('a')].append(i)

        # Initialize a list to store the minimum cost for each index
        min_cost = [float('inf')] * len(caption)
        min_cost[0] = 0

        # Iterate through the indices in reverse order
        for i in range(len(caption) - 1, -1, -1):
            # Calculate the minimum cost for the current index
            min_cost[i] = min(min_cost[i], min_cost[i + 1] + 1)
            # Update the minimum cost for the next index if the current character is 'a'
            if caption[i] == 'a':
                min_cost[i + 1] = min(min_cost[i + 1], min_cost[i] + 1)
                # Update the minimum cost for the next index if the current character is 'z'
            elif caption[i] == 'z':
                min_cost[i + 1] = min(min_cost[i + 1], min_cost[i] + 1)

        # Initialize a list to store the minimum cost for each group of consecutive characters
        min_group_cost = [float('inf')] * len(caption)

        # Iterate through the indices
        for i in range(len(indices)):
            # Calculate the minimum cost for each group of consecutive characters
            for j in range(len(indices[i]) - 2):
                min_group_cost[indices[i][j]] = min(min_group_cost[indices[i][j]], min_cost[indices[i][j + 2]] + 1)

        # Initialize a variable to store the lexicographically smallest good caption
        result = caption

        # Iterate through the indices
        for i in range(len(indices)):
            # Update the lexicographically smallest good caption if possible
            for j in range(len(indices[i]) - 2):
                if min_group_cost[indices[i][j]] + 1 < min_cost[indices[i][j + 2]]:
                    result = result[:indices[i][j]] + chr((ord(caption[indices[i][j]]) - ord('a') + 1) % 26 + ord('a')) + result[indices[i][j + 1:] + 1]

        # Return the lexicographically smallest good caption
        return result if result!= caption else ""
