/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const find = (root, target) => {
  const list = []
  const loop = (node) => {
    list.push(node)
    if (node.val === target) {
      return
    }
    if (node.left) {
      loop(node.left, target)
    }
    if (node.right) {
      loop(node.right, target)
    }
    list.pop()
  }
  loop(root)
  return list
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const pl = find(root, p.val)
  const ql = find(root, q.val)
  for (let i = 0; i < pl.length; i++) {
    if (pl[i].val !== ql[i].val) {
      return pl[i - 1]
    }
  }
}

module.exports = {
  TreeNode,
  lowestCommonAncestor,
}

const root = new TreeNode(3)
root.left = new TreeNode(5)
root.right = new TreeNode(1)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(2)
root.left.right.left = new TreeNode(7)
root.left.right.right = new TreeNode(4)
root.right.left = new TreeNode(0)
root.right.right = new TreeNode(8)

const pl = find(root, 6)
console.log(pl.map((n) => n.val))
