class abc(object):
    def test(self, n):
        """
        :type n: int
        :rtype: int
        """
        # Initialize a variable to store the sum of digits
        sum_digits = 0

        # Convert the input number to a string
        num_str = str(n)

        # Calculate the sum of digits using a loop
        for digit in num_str:
            sum_digits += int(digit)

        # Return the sum of digits
        return sum_digits

    