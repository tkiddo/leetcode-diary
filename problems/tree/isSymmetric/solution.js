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
const isSymmetric = function (root) {
  const arr = []
  const loop = (node) => {
    if (!node) {
      arr.push(null)
      return
    }
    loop(node.left)
    arr.push(node.val)
    loop(node.right)
  }
  loop(root)
  for (let i = 0; i < arr.length - i; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false
    }
  }
  return true
}

module.exports = {
  TreeNode,
  isSymmetric,
}
