/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  const target = []
  for (let i = 0; i < s.length; i++) {
    if ((s[i] === '-' || s[i] === '+') && target.length === 0) {
      target.push(s[i])
    } else if (s[i] === ' ' && target.length === 0) {
    } else if (!isNaN(parseInt(s[i]))) {
      target.push(s[i])
    } else {
      break
    }
  }
  const result = parseInt(target.join(''))
  if (isNaN(result)) {
    return 0
  }
  const max = Math.pow(2, 31) - 1
  if (result > max) {
    return max
  }
  const min = -Math.pow(2, 31)
  if (result < min) {
    return min
  }
  return result
}

module.exports = {
  myAtoi,
}
