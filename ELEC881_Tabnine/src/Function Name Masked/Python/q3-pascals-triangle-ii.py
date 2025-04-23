def test(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        # Initialize an empty list to store the Fibonacci numbers
        fib_nums = []

        # Calculate the Fibonacci numbers using a loop
        for i in range(rowIndex + 1):
            # If the index is 0 or 1, add 1 to the list
            if i <= 1:
                fib_nums.append(1)
            else:
                # Calculate the Fibonacci number using the previous two numbers
                fib_nums.append(fib_nums[i - 1] + fib_nums[i - 2])

        # Return the Fibonacci numbers list
        return fib_nums[rowIndex]
        