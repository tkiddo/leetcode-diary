const { TreeNode, isSubtree } = require('./solution')

test('example 1', () => {
  const root = new TreeNode(3)
  root.left = new TreeNode(4)
  root.right = new TreeNode(5)
  root.left.left = new TreeNode(1)
  root.left.right = new TreeNode(2)

  const subRoot = new TreeNode(4)
  subRoot.left = new TreeNode(1)
  subRoot.right = new TreeNode(2)

  const result = isSubtree(root, subRoot)
  expect(result).toBe(true)
})
