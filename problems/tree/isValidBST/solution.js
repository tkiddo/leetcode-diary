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
 * @return {boolean}
 */
const isValidBST = function (root) {
  if (!root) {
    return true
  }
  let result = true
  if (root.left && root.left.val >= root.val) {
    result = false
  }
  if (root.right && root.right.val <= root.val) {
    result = false
  }
  const left = isValidBST(root.left)
  const right = isValidBST(root.right)
  return result && left && right
}

module.exports = {
  TreeNode,
  isValidBST,
}
