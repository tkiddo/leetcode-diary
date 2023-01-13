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
var sumOfLeftLeaves = function (root) {
  let result = 0
  const loop = (node, type) => {
    if (!node.left && !node.right && type === 'left') {
      result += node.val
    }
    node.left && loop(node.left, 'left')
    node.right && loop(node.right, 'right')
  }
  loop(root)
  return result
}

module.exports = {
  TreeNode,
  sumOfLeftLeaves,
}
