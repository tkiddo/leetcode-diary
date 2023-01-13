const { TreeNode, getMinimumDifference } = require('./solution')

test('Example 1', () => {
  const root = new TreeNode(1)
  root.right = new TreeNode(3)
  root.right.left = new TreeNode(2)

  const expected = 1
  const received = getMinimumDifference(root)
  expect(received).toEqual(expected)
})

// [0,null,2236,1277,2776,519]
test('Example 2', () => {
  const root = new TreeNode(0)
  root.right = new TreeNode(2236)
  root.right.left = new TreeNode(1277)
  root.right.right = new TreeNode(2776)
  root.right.left.left = new TreeNode(519)

  const expected = 519
  const received = getMinimumDifference(root)
  expect(received).toEqual(expected)
})
