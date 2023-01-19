const { TreeNode, flatten } = require('./solution')

test('flatten', () => {
  const tree = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(5, null, new TreeNode(6))
  )
  flatten(tree)
  expect(tree).toEqual(
    new TreeNode(
      1,
      null,
      new TreeNode(
        2,
        null,
        new TreeNode(
          3,
          null,
          new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))
        )
      )
    )
  )
})
