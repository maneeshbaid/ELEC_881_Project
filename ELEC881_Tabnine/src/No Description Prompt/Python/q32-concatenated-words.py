class Solution(object):
    def findAllConcatenatedWordsInADict(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        words.sort(key=len)
        ans = []
        used = set()

        def dfs(word, index):
            if index == len(word):
                return True
            for i in range(index, len(word)):
                if word[index:i+1] in used and dfs(word[i+1:], index):
                    ans.append(word)
                    return True
            return False

        for word in words:
            used.add(word)
            dfs(word, 0)
            used.remove(word)

        return ans
        