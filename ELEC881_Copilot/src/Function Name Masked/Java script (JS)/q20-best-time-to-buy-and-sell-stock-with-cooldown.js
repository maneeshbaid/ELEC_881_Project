var max = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }
    var sell = 0;
    var buy = -prices[0];
    var prev_sell = 0;
    var prev_buy = 0;
    for (var i = 1; i < prices.length; i++) {
        prev_buy = buy;
        buy = Math.max(prev_sell - prices[i], prev_buy);
        prev_sell = sell;
        sell = Math.max(prev_buy + prices[i], prev_sell);
    }
    return sell;
}