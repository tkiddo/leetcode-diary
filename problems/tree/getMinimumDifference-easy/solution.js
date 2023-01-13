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
 * @return {number}
 */
var getMinimumDifference = function (root) {
  if (!root) {
    return 0
  }
  let prev = null,
    diff = null
  const dfs = (node) => {
    node.left && dfs(node.left)
    if (prev !== null) {
      if (diff === null) {
        diff = node.val - prev
      } else {
        diff = Math.min(node.val - prev, diff)
      }
    }
    prev = node.val
    node.right && dfs(node.right)
  }
  dfs(root)
  return diff
}

module.exports = {
  TreeNode,
  getMinimumDifference,
}
