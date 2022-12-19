/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1
  let a = 0,
    b = 1
  for (let i = 2; i <= n; i++) {
    let temp = (a + b) % 1000000007
    a = b
    b = temp
  }
  return b
}

module.exports = { fib }
