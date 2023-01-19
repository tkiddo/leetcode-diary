/**
 * 我的题解：
 * 暴力解法：两层循环，对haystack中每一个值，遍历needle的字符，看是否全部匹配
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let len = 0
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] === haystack[i + j]) {
        len++
      }
    }
    if (len === needle.length) {
      return i
    }
  }
  return -1
}

module.exports = {
  strStr
}
