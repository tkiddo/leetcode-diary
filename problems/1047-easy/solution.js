/**
 * 我的题解思路：
 * 递归剔除相连的相同字符，字符串太长会出错，循环太多
 */

/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = function (s) {
  const loop = function (n) {
    let i = 0
    let res = n
    const len = n.length
    while (i < len) {
      if (n[i] === n[i + 1]) {
        res = n.slice(0, i) + n.slice(i + 2, n.length)
        break
      }
      i++
    }
    if (res.length < n.length) {
      res = loop(res)
    }
    return res
  }
  return loop(s)
}

/**
 * 正解：
 * 往新字符串加，如果和最后一个相同，则去掉最后一个
 */

/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates2 = function (s) {
  let result = s[0]
  const len = s.length
  for (let i = 1; i < len; i++) {
    if (s[i] !== result[result.length - 1]) {
      result += s[i]
    } else {
      result = result.slice(0, result.length - 1)
    }
  }
  return result
}

/**最优解：使用for of遍历，数据结构栈 */

/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates3 = function (s) {
  const result = []
  for (const char of s) {
    if (result.length < 1 || result[result.length - 1] !== char) {
      result.push(char)
    } else {
      result.pop()
    }
  }
  return result.join('')
}

module.exports = {
  removeDuplicates,
  removeDuplicates2,
  removeDuplicates3,
}
