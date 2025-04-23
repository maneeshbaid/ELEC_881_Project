class Solution(object):
    def nthSuperUglyNumber(self, n, primes):
        """
        :type n: int
        :type primes: List[int]
        :rtype: int
        """
        ugly = [1]
        idx = [0] * len(primes)
        while len(ugly) < n:
            min_val = min([ugly[idx[i]] * primes[i] for i in range(len(primes))])
            for i in range(len(primes)):
                if ugly[idx[i]] * primes[i] == min_val:
                    idx[i] += 1
            ugly.append(min_val)
        return ugly[-1]