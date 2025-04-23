class abc(object):
    def num(self, s, t):
        # Implement the solution to count the number of unique substrings of string s that equal to t
        count = 0
        for i in range(len(s) - len(t) + 1):
            if s[i:i+len(t)] == t:
                count += 1
        return count


