const { TreeNode, tree2str } = require('./solution')

test('example 1', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4)),
    new TreeNode(3)
  )

  expect(tree2str(root)).toBe('1(2(4))(3)')
})
