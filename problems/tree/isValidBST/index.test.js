const { TreeNode, isValidBST } = require('./solution')

describe('isValidBST', () => {
  test('isValidBST', () => {
    const root = new TreeNode(2)
    root.left = new TreeNode(1)
    root.right = new TreeNode(3)
    expect(isValidBST(root)).toBe(true)
  })
  test('isValidBST', () => {
    const root = new TreeNode(5)
    root.left = new TreeNode(1)
    root.right = new TreeNode(4)
    root.right.left = new TreeNode(3)
    root.right.right = new TreeNode(6)
    expect(isValidBST(root)).toBe(false)
  })
})
