/**
 * 我的题解：
 * 暴力解法
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let i = 0
  const result = []
  while (true) {
    let isSame = null
    for (let j = 0; j < strs.length; j++) {
      if (i >= strs[j].length) {
        isSame = false
        break
      }
      if (strs[j + 1] && strs[j][i] !== strs[j + 1][i]) {
        isSame = false
        break
      } else {
        isSame = true
      }
    }
    if (isSame) {
      result.push(strs[0][i])
      i++
    } else {
      break
    }
  }
  return result.join('')
}

module.exports = {
  longestCommonPrefix
}
