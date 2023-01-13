/**
 * Definition for a binary tree node.
 
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let map = {}
  let max = 0
  let result = []
  const dfs = (node) => {
    if (!node) {
      return
    }
    if (map[node.val]) {
      map[node.val]++
    } else {
      map[node.val] = 1
    }
    if (map[node.val] > max) {
      max = map[node.val]
      result = [node.val]
    } else if (map[node.val] === max) {
      result.push(node.val)
    }
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return result
}

module.exports = {
  TreeNode,
  findMode,
}
