def test(self, n):
    res = [0]
    for i in range(1, n + 1):
        res.append(res[i >> 1] + (i & 1))
    return res