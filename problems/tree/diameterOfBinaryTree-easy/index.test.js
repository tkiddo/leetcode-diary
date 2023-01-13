const { TreeNode, diameterOfBinaryTree } = require('./solution')

test('example 1', () => {
  let root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  root.left.left = new TreeNode(4)
  root.left.right = new TreeNode(5)

  let result = diameterOfBinaryTree(root)
  expect(result).toBe(3)
})
