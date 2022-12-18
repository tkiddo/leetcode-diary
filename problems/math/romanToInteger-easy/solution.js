/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const charMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const strArr = s.split('')
}

module.exports = {
  romanToInt
}
