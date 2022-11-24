/**
 * 我的题解：
 * 前后位置对调，temp保存临时变量
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    let temp = s[i]
    s[i] = s[s.length - i - 1]
    s[s.length - i - 1] = temp
  }
}

module.exports = {
  reverseString,
}
