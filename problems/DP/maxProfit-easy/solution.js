/**
 * 暴力解法
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit2 = function (prices) {
  if (prices.length === 1) {
    return 0
  }
  let max = 0
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i]
      if (profit > max) {
        max = profit
      }
    }
  }
  return max
}

/**
 * 一次遍历，记住最小价格，当前价格减去最小价格得到利润
 * @param {} prices
 * @returns
 */
const maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0
  }
  let minprice = prices[0]
  let maxprofit = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i]
    } else {
      const profit = prices[i] - minprice
      if (profit > maxprofit) {
        maxprofit = profit
      }
    }
  }
  return maxprofit
}

module.exports = {
  maxProfit
}
