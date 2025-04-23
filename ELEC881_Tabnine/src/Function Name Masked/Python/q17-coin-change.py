class abc(object):
    def bcd(self, coins, amount):
        # Implement the solution to find the minimum number of coins needed to make up an amount
        # using dynamic programming with memoization
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0

        for i in range(1, amount + 1):
            for coin in coins:
                if i >= coin:
                    dp[i] = min(dp[i], dp[i - coin] + 1)

        return dp[amount] if dp[amount] != float('inf') else -1
        