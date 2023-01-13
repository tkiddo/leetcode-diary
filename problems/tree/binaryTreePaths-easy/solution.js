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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = []
  const loop = (node, prePath) => {
    const path = prePath ? `${prePath}->${node.val}` : `${node.val}`
    if (!node.left && !node.right) {
      result.push(path)
      return
    }
    node.left && loop(node.left, path)
    node.right && loop(node.right, path)
  }
  loop(root, '')
  return result
}

module.exports = {
  TreeNode,
  binaryTreePaths,
}
