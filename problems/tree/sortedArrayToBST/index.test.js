const { TreeNode, sortedArrayToBST } = require('./solution')

describe('sortedArrayToBST', () => {
  it('should return a tree', () => {
    const nums = [-10, -3, 0, 5, 9]
    const root = new TreeNode(0)
    root.left = new TreeNode(-3)
    root.left.left = new TreeNode(-10)
    root.right = new TreeNode(9)
    root.right.left = new TreeNode(5)
    expect(sortedArrayToBST(nums)).toEqual(root)
  })
})
