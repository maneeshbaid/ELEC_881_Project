class abc(object):
    def abc1(self, intervals):
        # Sort the intervals based on their start times
        intervals.sort(key=lambda x: x[0])

        # Initialize a list to store the merged intervals
        merged = []

        # Iterate through the sorted intervals
        for interval in intervals:
            # If the merged intervals list is empty or the current interval does not overlap with the last merged interval, append the current interval to the list
            if not merged or merged[-1][1] < interval[0]:
                merged.append(interval)
            # Otherwise, update the end time of the last merged interval to be the maximum of the current interval's end time and the last merged interval's end time
            else:
                merged[-1][1] = max(merged[-1][1], interval[1])

        # Return the merged intervals
        return merged
        