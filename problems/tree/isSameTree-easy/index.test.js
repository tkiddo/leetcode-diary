const { isSameTree, TreeNode } = require('./solution')

test('example 1', () => {
  let p = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  let q = new TreeNode(1, new TreeNode(2), new TreeNode(3))

  let result = isSameTree(p, q)
  expect(result).toBe(true)
})
