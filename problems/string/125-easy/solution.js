/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = function (s) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
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

const isPalindrome2 = function (s) {
  let newS = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase()
  for (let i = 0; i < newS.length - i - 1; i++) {
    if (newS[i] !== newS[newS.length - i - 1]) {
      return false
    }
  }
  return true
}

module.exports = {
  isPalindrome,
  isPalindrome2
}
