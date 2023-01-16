const {TreeNode,findSecondMinimumValue} = require('./solution')

test('example 1', () => {
  let root = new TreeNode(2)
  root.left = new TreeNode(2)
  root.right = new TreeNode(5)
  root.right.left = new TreeNode(5)
  root.right.right = new TreeNode(7)

  let output = 5

  expect(findSecondMinimumValue(root)).toEqual(output)
})