/**
 * 我的题解：
 * 记录每个递增序列的最小值和最大值，相减得利润
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let minIndex = 0
  let maxIndex = 0
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      maxIndex++
    } else {
      profit += prices[maxIndex] - prices[minIndex]
      minIndex = i + 1
      maxIndex = i + 1
    }
  }
  return profit
}

/** 官方题解：
 * 贪心算法：每次都选择最优解
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit2 = function (prices) {
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i]
    }
  }
  return profit
}

module.exports = {
  maxProfit,
  maxProfit2,
}
