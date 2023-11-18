//Write a program to identify the best time for buy and sell a particular stock and return the maximun profit you can achieve from the given data

function stock(prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];

      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(stock(prices));
