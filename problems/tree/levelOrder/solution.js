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
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const result = []
  const loop = (node, depth) => {
    if (node) {
      if (!result[depth]) {
        result[depth] = []
      }
      result[depth].push(node.val)
      loop(node.left, depth + 1)
      loop(node.right, depth + 1)
    }
  }
  loop(root, 0)
  return result
}

module.exports = {
  TreeNode,
  levelOrder,
}
