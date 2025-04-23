class abc(object):
    def cdf(self, n):
        # Check if the input number is negative
        if n < 0:
            return "Error: Input number must be non-negative."

        # Check if the input number is a prime number
        if n <= 1:
            return False

        # Check if the input number is a perfect square
        sqrt_n = int(n ** 0.5)
        if sqrt_n * sqrt_n == n:
            return True

        # Check if the input number is a Fibonacci number
        fib_sequence = [0, 1]
        while fib_sequence[-1] < n:
            fib_sequence.append(fib_sequence[-1] + fib_sequence[-2])
        return fib_sequence[-1] == n
        
    