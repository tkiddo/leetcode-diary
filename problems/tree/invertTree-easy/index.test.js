const { TreeNode, invertTree } = require('./solution')

test('Example 1', () => {
  const root = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7, new TreeNode(6), new TreeNode(9))
  )

  const expected = new TreeNode(
    4,
    new TreeNode(7, new TreeNode(9), new TreeNode(6)),
    new TreeNode(2, new TreeNode(3), new TreeNode(1))
  )

  expect(invertTree(root)).toEqual(expected)
})
