/**
 * @param {number} n
 * @return {number}
 */
const isPrime = (x) => {
  for (let i = 2; i * i <= x; ++i) {
    if (x % i == 0) {
      return false
    }
  }
  return true
}

var countPrimes = function (n) {
  let ans = 0
  for (let i = 2; i < n; ++i) {
    ans += isPrime(i)
  }
  return ans
}

module.exports = {
  countPrimes
}
