class Solution(object):
    def nthSuperUglyNumber(self, n, primes):
        """
        :type n: int
        :type primes: List[int]
        :rtype: int
        """
        if n <= 0:
            return 0

        ugly = [0] * n
        ugly[0] = 1
        index = [0] * len(primes)

        for i in range(1, n):
            next_ugly = float('inf')
            for j in range(len(primes)):
                next_ugly = min(next_ugly, ugly[index[j]] * primes[j])
            ugly[i] = next_ugly

            for j in range(len(primes)):
                if ugly[i] == ugly[index[j]] * primes[j]:
                    index[j] += 1

        return ugly[n - 1]







        