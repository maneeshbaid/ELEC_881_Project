class Solution(object):
    def test(self, numRows):
        # Initialize the first row with a single 1
        row = [1]

        # Iterate from 2 to the given number of rows
        for i in range(2, numRows + 1):
            # Initialize the current row with zeros
            current_row = [0] * i

            # Set the first and last elements of the current row to 1
            current_row[0] = current_row[-1] = 1

            # Set the elements of the current row based on the elements of the previous row
            for j in range(1, i - 1):
                current_row[j] = row[j - 1] + row[j]

            # Update the row for the next iteration
            row = current_row

        # Return the last row
        return row
        