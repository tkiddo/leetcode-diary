/**
 * 递归法，会重复计算
 */
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs2 = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  return climbStairs(n - 1) + climbStairs(n - 2)
}

/**
 * 保存当前最后两个计算结果，为下一个做准备，不用每次重新计算
 * @param {} n
 * @returns
 */
const climbStairs = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  let a = 1,
    b = 2
  let result = 0
  for (let i = 2; i < n; i++) {
    result = a + b
    a = b
    b = result
  }
  return result
}

module.exports = {
  climbStairs
}
