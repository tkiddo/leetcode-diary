const { TreeNode, averageOfLevels } = require('./solution')

test('example 1', () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  )

  const output = averageOfLevels(root)

  expect(output).toEqual([3, 14.5, 11])
})
