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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const sort = []
  const dfs = (node) => {
    node.left && dfs(node.left)
    sort.push(node.val)
    node.right && dfs(node.right)
  }
  dfs(root)
  let l = 0,
    r = sort.length - 1
  while (l < r) {
    const sum = sort[l] + sort[r]
    if (sum > k) {
      r--
    } else if (sum < k) {
      l++
    } else {
      return true
    }
  }
  return false
}

module.exports = {
  TreeNode,
  findTarget,
}
