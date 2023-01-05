/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var height = function (root) {
  if (root === null) {
    return 0
  }
  return Math.max(height(root.left), height(root.right)) + 1
}
var isBalanced = function (root) {
  if (root === null) {
    return true
  }
  return (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}
