class abc(object):
    def poorPigs(self, buckets, minutesToDie, minutesToTest):
        # Implement the solution to find the minimum number of pigs required to test all the buckets
        # with the given conditions
        pigs = 0
        while buckets / (2 ** pigs) >= minutesToTest:
            pigs += 1

        return pigs
        