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
 * @return {string}
 */
var tree2str = function (root) {
  if (!root) {
    return ''
  }
  const dfs = (node, type) => {
    if (!node) {
      return type === 'left' ? '()' : ''
    }
    if (!node.left && !node.right) {
      return type ? `(${node.val})` : `${node.val}`
    }
    const left = dfs(node.left, 'left')
    const right = dfs(node.right, 'right')
    return type ? `(${node.val}${left}${right})` : `${node.val}${left}${right}`
  }
  return dfs(root)
}

module.exports = {
  TreeNode,
  tree2str,
}
