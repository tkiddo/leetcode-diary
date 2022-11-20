/**
 * 我的题解：
 * 从最后一位开始加一，超过9则重置为0，前一位加一，依次循环判断是否大于9.当遍历结束，如果第一位是0，则在最前面加1
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  const result = digits
  result[result.length - 1]++
  if (result[result.length - 1] < 10) {
    return result
  }
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] > 9) {
      result[i] = 0
      if (i - 1 >= 0) {
        result[i - 1]++
      }
    }
  }
  if (result[0] === 0) {
    result.unshift(1)
  }
  return result
}

module.exports = {
  plusOne
}
