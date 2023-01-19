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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) {
    return
  }
  const queue = []
  const dfs = (node) => {
    queue.push(node)
    node.left && dfs(node.left)
    node.right && dfs(node.right)
  }
  dfs(root)
  let c = queue.shift()
  while (queue.length) {
    const next = queue.shift()
    c.right = next
    c.left = null
    c = next
  }
  c.left = null
  c.right = null
}

module.exports = {
  flatten,
  TreeNode,
}
