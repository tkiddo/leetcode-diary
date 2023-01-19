const { TreeNode, buildTree } = require('./solution')

describe('buildTree', () => {
  test('Example 1', () => {
    const preorder = [3, 9, 20, 15, 7]
    const inorder = [9, 3, 15, 20, 7]

    const expected = new TreeNode(3)
    expected.left = new TreeNode(9)
    expected.right = new TreeNode(20)
    expected.right.left = new TreeNode(15)
    expected.right.right = new TreeNode(7)

    const received = buildTree(preorder, inorder)
    expect(received).toEqual(expected)
  })
})
