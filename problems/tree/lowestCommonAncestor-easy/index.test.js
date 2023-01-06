const { lowestCommonAncestor, TreeNode } = require('./solution')

test('lowestCommonAncestor', () => {
  const root = new TreeNode(3)
  root.left = new TreeNode(5)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(6)
  root.left.right = new TreeNode(2)
  root.left.right.left = new TreeNode(7)
  root.left.right.right = new TreeNode(4)
  root.right.left = new TreeNode(0)
  root.right.right = new TreeNode(8)
  expect(lowestCommonAncestor(root, root.left, root.right).val).toBe(3)
  expect(lowestCommonAncestor(root, root.left, root.left.right.right).val).toBe(
    5
  )
})
