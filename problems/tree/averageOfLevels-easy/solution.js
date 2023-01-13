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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const result = []
  const queue = []
  queue.push(root)
  while (queue.length) {
    const len = queue.length
    let sum = 0
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      sum += node.val
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    const average = sum / len
    result.push(average)
  }
  return result
}

module.exports = {
  TreeNode,
  averageOfLevels,
}
