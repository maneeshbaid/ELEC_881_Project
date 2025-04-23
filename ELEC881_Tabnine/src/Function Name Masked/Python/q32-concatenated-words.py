class ab(object):
    def abc(self, words):
        # Implement the solution to find the minimum number of words that need to be deleted to make the remaining words an anagram of each other
        if len(words) < 2:
            return 0

        freq_map = {}
        for word in words:
            sorted_word = ''.join(sorted(word))
            freq_map[sorted_word] = freq_map.get(sorted_word, 0) + 1

        min_deletions = 0
        for count in freq_map.values():
            min_deletions += count - 1

        return min_deletions
        