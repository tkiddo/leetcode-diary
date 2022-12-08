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
 * 我的解法：
 * 递归判断左右子树是否满足条件，看似可以，实际有问题，因为没有考虑到左右子树的子树，有最大值和最小值的限制
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST2 = function (root) {
  if (!root) {
    return true
  }
  let result = true
  if (root.left && root.left.val >= root.val) {
    result = false
  }
  if (root.right && root.right.val <= root.val) {
    result = false
  }
  const left = isValidBST2(root.left)
  const right = isValidBST2(root.right)
  return result && left && right
}

/**
 * 官方解法：
 * 递归判断左右子树是否满足条件，同时传入最大值和最小值，判断当前节点是否满足条件
 * @param {*} root
 * @returns
 */

const isValidBST3 = function (root) {
  const helper = (node, min, max) => {
    if (!node) {
      return true
    }
    if (node.val <= min || node.val >= max) {
      return false
    }
    return helper(node.left, min, node.val) && helper(node.right, node.val, max)
  }
  return helper(root, -Infinity, Infinity)
}

/**
 * 官方解法：
 * 中序遍历，判断当前节点是否大于上一个节点
 * @param {*} root
 * @returns
 */
const isValidBST = function (root) {
  let current = null
  const loop = (node) => {
    if (!node) {
      return true
    }
    if (!loop(node.left)) {
      return false
    }
    if (current && node.val <= current.val) {
      return false
    }
    current = node
    if (!loop(node.right)) {
      return false
    }
    return true
  }
  return loop(root)
}

module.exports = {
  TreeNode,
  isValidBST,
}
