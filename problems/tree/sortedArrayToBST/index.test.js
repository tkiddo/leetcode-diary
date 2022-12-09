const { TreeNode, sortedArrayToBST } = require('./solution')

describe('sortedArrayToBST', () => {
  it('should return a tree', () => {
    const tree = sortedArrayToBST([-10, -3, 0, 5, 9])
    expect(tree).toEqual(
      new TreeNode(
        0,
        new TreeNode(-3, new TreeNode(-10)),
        new TreeNode(9, new TreeNode(5))
      )
    )
  })
})
