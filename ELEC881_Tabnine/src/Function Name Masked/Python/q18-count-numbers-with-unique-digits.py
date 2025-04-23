class abc(object):
    def cbc(self, n):
        # Implement the solution to find the nth Fibonacci number using dynamic programming
        fib = [0, 1] + [0] * (n - 1)
        for i in range(2, n + 1):
            fib[i] = fib[i - 1] + fib[i - 2]
        return fib[n]
        
