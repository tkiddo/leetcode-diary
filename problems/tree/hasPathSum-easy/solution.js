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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false
  }
  let result = false
  const loop = (node, sum) => {
    if (result) {
      return
    }
    const num = sum + node.val
    if (!node.left && !node.right) {
      if (num === targetSum) {
        result = true
      }
    }
    node.left && loop(node.left, num)
    node.right && loop(node.right, num)
  }
  loop(root, 0)
  return result
}

module.exports = {
  TreeNode,
  hasPathSum,
}
