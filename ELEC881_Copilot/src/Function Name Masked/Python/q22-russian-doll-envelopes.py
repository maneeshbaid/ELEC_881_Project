class abc(object):
    def absd(self, envelopes):
        envelopes.sort(key=lambda x: (x[0], -x[1]))
        dp = []
        for w, h in envelopes:
            l, r = 0, len(dp)
            while l < r:
                m = (l + r) // 2
                if dp[m][1] < h:
                    l = m + 1
                else:
                    r = m
            if r == len(dp):
                dp.append([w, h])
            else:
                dp[r][1] = h
        return len(dp)