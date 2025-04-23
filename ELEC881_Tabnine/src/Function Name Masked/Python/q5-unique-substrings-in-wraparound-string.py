class abc(object):
    def test(self, s):
        """
        :type p: str
        :rtype: int
        """
        # Initialize variables to store the length of the longest substring and the current substring
        max_len = 0
        curr_len = 0

        # Iterate through the characters in the string
        for char in s:
            # If the character is a vowel, update the current substring length
            if char.lower() in 'aeiou':
                curr_len += 1
            else:
                # If the current substring length is greater than the maximum length, update the maximum length
                max_len = max(max_len, curr_len)
                curr_len = 0

        # Return the maximum length
        return max_len


    