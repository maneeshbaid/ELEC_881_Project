class abc(object):
    def cbc(self, n):
        if n == 0:
            return 1
        if n == 1:
            return 10
        if n > 10:
            return self.cbc(10)
        res = 10
        for i in range(1, n):
            res *= 10 - i
        return res + self.cbc(n - 1)

