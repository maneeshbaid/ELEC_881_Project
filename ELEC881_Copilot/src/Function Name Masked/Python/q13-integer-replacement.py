class abc(object):
    def cdf(self, n):
        if n == 1:
            return 0
        if n % 2 == 0:
            return 1 + self.cdf(n / 2)
        else:
            return 1 + min(self.cdf(n + 1), self.cdf(n - 1))
    