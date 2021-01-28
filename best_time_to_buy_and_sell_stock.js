var maxProfit = function(prices) {
  var maxprofit = 0;
  for (var i = 0; i < prices.length - 1; i++) {
    for (var j = i + 1; j < prices.length; j++) {
      var profit = prices[j] - prices[i];
      if (profit > maxprofit) maxprofit = profit;
    }
  }
  return maxprofit;
};