class test(object):
    def test1(self, n, primes):
        ugly = [1]
        idx = [0] * len(primes)
        while len(ugly) < n:
            next = min([ugly[idx[i]] * primes[i] for i in range(len(primes))])
            for i in range(len(primes)):
                if ugly[idx[i]] * primes[i] == next:
                    idx[i] += 1
            ugly.append(next)
        return ugly[-1]