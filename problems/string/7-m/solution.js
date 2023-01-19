/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  if (x < 10 && x > -10) {
    return x
  }
  const result = []
  const isNegative = x < 0
  let num = isNegative ? x * -1 : x
  while (num !== 0) {
    const target = num % 10
    if (!(target === 0 && result.length === 0)) {
      result.push(target)
    }
    num = (num - target) / 10
  }
  const resultNumber = parseInt(result.join('')) * (isNegative ? -1 : 1)
  if (resultNumber > Math.pow(2, 31) - 1 || resultNumber < Math.pow(-2, 31)) {
    return 0
  }
  return resultNumber
}

module.exports = {
  reverse,
}
