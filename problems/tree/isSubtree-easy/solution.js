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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root || !subRoot) {
    return root === subRoot
  }
  const isSame = (r1, r2) => {
    if (!r1 || !r2) {
      return r1 === r2
    }
    return (
      r1.val === r2.val &&
      isSame(r1.left, r2.left) &&
      isSame(r1.right, r2.right)
    )
  }
  let result = false
  const dfs = (node) => {
    if (result) {
      return
    }
    if (node.val === subRoot.val) {
      result = isSame(node, subRoot)
    }
    node.left && dfs(node.left)
    node.right && dfs(node.right)
  }
  dfs(root)
  return result
}

module.exports = {
  TreeNode,
  isSubtree,
}
