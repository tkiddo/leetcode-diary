/**
 * @param {string} s
 * @return {boolean}
 */
const chars = 'abcdefghijklmnopqrstuvwxyz'
const isPalindrome = function (s) {
  const strArr = s.toLocaleLowerCase().split('')
  const resultArr = []
  for (let i = 0; i < strArr.length; i++) {
    if (chars.includes(strArr[i])) {
      resultArr.push(strArr[i])
    }
  }
  for (let i = 0; i < resultArr.length - i - 1; i++) {
    if (resultArr[i] !== resultArr[resultArr.length - i - 1]) {
      return false
    }
  }
  return true
}

module.exports = {
  isPalindrome,
}
