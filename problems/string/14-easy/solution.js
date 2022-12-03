/**
 * 我的题解：
 * 暴力解法
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix2 = function (strs) {
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

/**
 * 纵向比较
 * @param {} strs
 * @returns
 */
const longestCommonPrefix3 = function (strs) {
  let result = []
  let i = 0
  let isEnd = false
  while (!isEnd) {
    for (let j = 0; j < strs.length; j++) {
      if (!strs[j][i]) {
        result[i] = ''
        isEnd = true
        break
      } else {
        if (!result[i]) {
          result[i] = strs[j][i]
        } else if (result[i] !== strs[j][i]) {
          result[i] = ''
          isEnd = true
          break
        }
      }
    }
    i++
  }
  return result.join('')
}

const longestCommonPrefix = function (strs) {}

module.exports = {
  longestCommonPrefix
}
