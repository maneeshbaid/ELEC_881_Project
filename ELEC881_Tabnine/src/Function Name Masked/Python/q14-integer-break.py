class abc(object):
    def bcd(self, n):
        # Implement the solution to find the nth Fibonacci number
        # using memoization to avoid redundant calculations
        fib_sequence = [0, 1]
        for i in range(2, n + 1):
            fib_sequence.append(fib_sequence[i - 1] + fib_sequence[i - 2])
        return fib_sequence[n]
        