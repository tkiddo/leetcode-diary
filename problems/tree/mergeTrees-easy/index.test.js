const { TreeNode, mergeTrees } = require('./solution')

test('example 1', () => {
  const root1 = new TreeNode(
    1,
    new TreeNode(3, new TreeNode(5)),
    new TreeNode(2)
  )
  const root2 = new TreeNode(
    2,
    new TreeNode(1, null, new TreeNode(4)),
    new TreeNode(3, null, new TreeNode(7))
  )
  const output = new TreeNode(
    3,
    new TreeNode(4, new TreeNode(5), new TreeNode(4)),
    new TreeNode(5, null, new TreeNode(7))
  )
  expect(mergeTrees(root1, root2)).toEqual(output)
})
