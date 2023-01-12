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
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
  function dfs(start, end) {
    if (start > end) {
      return null
    }
    const mid = Math.floor((start + end) / 2)
    const node = new TreeNode(nums[mid])
    node.left = dfs(start, mid - 1)
    node.right = dfs(mid + 1, end)
    return node
  }
  return dfs(0, nums.length - 1)
}

module.exports = {
  TreeNode,
  sortedArrayToBST,
}
