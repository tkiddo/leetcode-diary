function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function inorder(root) {
  const result = []
  const loop = (node) => {
    if (!node) {
      return
    }
    loop(node.left)
    result.push(node.val)
    loop(node.right)
  }
  loop(root)
  return result
}

function preorder(root) {
  const result = []
  const loop = (node) => {
    if (!node) {
      return
    }
    result.push(node.val)
    loop(node.left)
    loop(node.right)
  }
  loop(root)
  return result
}

function postorder(root) {
  const result = []
  const loop = (node) => {
    if (!node) {
      return
    }
    loop(node.left)
    loop(node.right)
    result.push(node.val)
  }
  loop(root)
  return result
}

module.exports = {
  TreeNode,
  inorder,
  preorder,
  postorder,
}
