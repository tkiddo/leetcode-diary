const { TreeNode, findMode } = require('./solution')

test('example 1', () => {
  let root = new TreeNode(1)
  root.right = new TreeNode(2)
  root.right.left = new TreeNode(2)

  let output = findMode(root)

  expect(output).toEqual([2])
})
