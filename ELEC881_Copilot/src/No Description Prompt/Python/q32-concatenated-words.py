class Solution(object):
    def findAllConcatenatedWordsInADict(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        words = set(words)
        def dfs(word):
            for i in range(1, len(word)):
                prefix, suffix = word[:i], word[i:]
                if prefix in words and suffix in words:
                    return True
                if prefix in words and dfs(suffix):
                    return True
                if suffix in words and dfs(prefix):
                    return True
            return False
        return [word for word in words if dfs(word)]