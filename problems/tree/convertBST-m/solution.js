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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  if (!root) {
    return root
  }
  let sum = 0
  const dfs = (node) => {
    node.right && dfs(node.right)
    sum += node.val
    node.val = sum
    node.left && dfs(node.left)
  }
  dfs(root)
  return root
}

module.exports = {
  convertBST,
  TreeNode,
}
