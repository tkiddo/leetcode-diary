/**
 * 我的题解：
 * 遍历字符串，把每个字符的索引存在哈希表，遍历哈希表，找出索引只有一个的数组中的最小值
 */

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = [i]
    } else {
      map[s[i]].push(i)
    }
  }
  let index = -1
  Object.keys(map).forEach((key) => {
    if (map[key].length < 2) {
      if (index === -1 || map[key][0] < index) {
        index = map[key][0]
      }
    }
  })
  return index
}

module.exports = {
  firstUniqChar,
}
