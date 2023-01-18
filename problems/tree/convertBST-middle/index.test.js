const { TreeNode, convertBST } = require('./solution')

test('convertBST', () => {
  const tree = new TreeNode(5, new TreeNode(2), new TreeNode(13))
  expect(convertBST(tree)).toEqual(
    new TreeNode(18, new TreeNode(20), new TreeNode(13))
  )
})
