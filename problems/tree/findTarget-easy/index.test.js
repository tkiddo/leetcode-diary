const { TreeNode, findTarget } = require('./solution')

test('example 1', () => {
  const root = new TreeNode(
    5,
    new TreeNode(3, new TreeNode(2), new TreeNode(4)),
    new TreeNode(6, null, new TreeNode(7))
  )

  const output = findTarget(root, 9)

  expect(output).toBe(true)
})
