const { TreeNode, isSymmetric } = require('./solution')

describe('isSymmetric', () => {
  it('should return true if the tree is symmetric', () => {
    const tree = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3))
    )
    expect(isSymmetric(tree)).toBe(true)
  })
  it('should return false if the tree is not symmetric', () => {
    const tree = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(5))
    )
    expect(isSymmetric(tree)).toBe(false)
  })
})
