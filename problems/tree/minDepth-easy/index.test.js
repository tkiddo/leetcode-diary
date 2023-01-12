const { TreeNode, minDepth } = require('./solution')

test('minDepth', () => {
  const root = new TreeNode(3)
  root.left = new TreeNode(9)
  root.right = new TreeNode(20)
  root.right.left = new TreeNode(15)
  root.right.right = new TreeNode(7)
  expect(minDepth(root)).toEqual(2)
})
