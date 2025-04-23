class ab(object):
    def abc(self, words):
        words = sorted(words, key=lambda x: len(x))
        words_set = set(words)
        res = []
        for word in words:
            words_set.remove(word)
            if self.dfs(word, words_set):
                res.append(word)
            words_set.add(word)
        return res
    
    def dfs(self, word, words_set):
        if word in words_set:
            return True
        for i in range(1, len(word)):
            if word[:i] in words_set and self.dfs(word[i:], words_set):
                return True
        return False