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
 * 递归判断左右子树是否满足条件，看似可以，实际有问题，因为没有考虑到左右子树的子树，有最大值和最小值的限制
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST2 = function (root) {
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
  const left = isValidBST2(root.left)
  const right = isValidBST2(root.right)
  return result && left && right
}

const isValidBST = function (root) {
  const loop = (node) => {}
  return loop(root)
}

module.exports = {
  TreeNode,
  isValidBST,
}
