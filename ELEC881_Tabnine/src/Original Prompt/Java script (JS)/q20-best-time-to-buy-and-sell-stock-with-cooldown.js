/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

Example 1:

Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]
Example 2:

Input: prices = [1]
Output: 0
 

Constraints:

1 <= prices.length <= 5000
0 <= prices[i] <= 1000
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;

    let buy1 = -prices[0];
    let buy2 = -Infinity;
    let sell1 = 0;
    let sell2 = 0;

    for (let i = 1; i < prices.length; i++) {
        const newBuy1 = Math.max(buy1, -prices[i]);
        const newBuy2 = Math.max(buy2, sell1 - prices[i]);
        const newSell1 = Math.max(sell1, buy2 + prices[i]);
        const newSell2 = Math.max(sell2, newBuy1 + prices[i]);

        buy1 = newBuy1;
        buy2 = newBuy2;
        sell1 = newSell1;
        sell2 = newSell2;
    }

    return sell2;
};