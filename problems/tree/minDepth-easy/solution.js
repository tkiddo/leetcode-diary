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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0
  }
  const queue = []
  let depth = 1
  queue.push(root)
  while (queue.length) {
    const num = queue.length
    for (let i = 0; i < num; i++) {
      const node = queue.shift()
      if (!node.left && !node.right) {
        return depth
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    depth++
  }
}

module.exports = {
  TreeNode,
  minDepth,
}
