class Solution(object):
    def canCross(self, stones):
        """
        :type stones: List[int]
        :rtype: bool
        """
        if len(stones) < 3:
            return False

        dp = {stone: {1} for stone in stones}
        for stone in stones:
            for k in dp[stone]:
                for next_stone in (stone + k - 1, stone + k, stone + k + 1):
                    if next_stone in stones:
                        dp[next_stone] = dp.get(next_stone, set()) | {k}

        return len(dp[stones[-1]]) > 0
        