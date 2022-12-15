/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  const loop = (a) => {
    if (a === 1) {
      return {
        1: 1,
        2: 0,
      }
    }
    if (a === 2) {
      return {
        1: 1,
        2: 1,
      }
    }
    return {
      1: loop(a - 1)['1'] + loop(a - 1)['2'],
      2: loop(a - 1)['1'] + loop(a - 1)['2'],
    }
  }
  return loop(n)['1'] + loop(n)['2']
}

module.exports = {
  climbStairs,
}
