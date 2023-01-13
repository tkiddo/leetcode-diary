const { TreeNode, sumOfLeftLeaves } = require('./solution')

test('example 1', () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  )

  const result = sumOfLeftLeaves(root)
  expect(result).toBe(24)
})
