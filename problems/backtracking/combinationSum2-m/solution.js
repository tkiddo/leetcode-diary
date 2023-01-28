/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort()
  const path = [],
    result = []
  const dfs = (list, rest, index) => {
    if (rest === 0) {
      result.push([...path])
      return
    }
    for (let i = index; i < list.length; i++) {
      if (i > index && list[i] === list[i - 1]) {
        continue
      }
      if (rest >= list[i]) {
        path.push(list[i])
        dfs(list, rest - list[i], i + 1)
        path.pop()
      }
    }
  }
  dfs(candidates, target, 0)
  return result
}

module.exports = combinationSum2
