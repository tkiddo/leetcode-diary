/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const path = [],
    result = []
  const dfs = (range, begin) => {
    if (path.length === k) {
      result.push([...path])
      return
    }
    for (let i = begin; i <= range; i++) {
      path.push(i)
      dfs(range, i + 1)
      path.pop()
    }
  }
  dfs(n, 1)
  return result
}

module.exports = combine
