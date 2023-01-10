/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  let dp1 = 1
  let dp2
  let dp
  let prev
  let current
  let rest
  current = num % 10
  rest = (num - current) / 10
  dp2 = 1
  dp = dp2
  while (rest > 0) {
    console.log('rest', rest)
    prev = current
    current = rest % 10
    rest = (rest - current) / 10
    if (current * 10 + prev < 26) {
      dp = dp2 + dp1
    } else {
      dp = dp2
    }
    dp1 = dp2
    dp2 = dp
  }
  return dp
}

translateNum(12258)
