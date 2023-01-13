const { TreeNode, binaryTreePaths } = require('./solution')

test('Example 1', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(5)),
    new TreeNode(3)
  )

  const expected = ['1->2->5', '1->3']

  expect(binaryTreePaths(root)).toEqual(expected)
})
