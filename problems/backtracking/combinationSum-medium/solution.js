/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort()
  const result = []
  const path = []
  const dfs = (arr, rest, idx) => {
    if (rest === 0) {
      result.push([...path])
    }
    for (let i = idx; i < arr.length; i++) {
      if (arr[i] <= rest) {
        path.push(arr[i])
        dfs(arr, rest - arr[i], i)
        path.pop()
      }
    }
  }
  dfs(candidates, target, 0)
  return result
}

module.exports = combinationSum
