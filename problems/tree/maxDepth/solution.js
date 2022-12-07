/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * 我的解法：
 * 递归比较左右两边的深度，最大的深度累加
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  if (!root) {
    return 0
  }
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)
  const max = leftDepth > rightDepth ? leftDepth : rightDepth
  return 1 + max
}

module.exports = {
  TreeNode,
  maxDepth,
}
