class ab(object):
    def get(self, s1, n1, s2, n2):
        if not s1 or not s2 or n1 == 0 or n2 == 0:
            return 0
        s1 = list(s1)
        s2 = list(s2)
        i = 0
        j = 0
        count = 0
        while count < n1:
            if s1[i] == s2[j]:
                j += 1
                if j == len(s2):
                    j = 0
                    count += 1
            i += 1
            if i == len(s1):
                i = 0
        return count