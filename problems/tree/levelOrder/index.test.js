const { TreeNode, levelOrder } = require('./solution')

describe('levelOrder', () => {
  it('should return an array of arrays of values', () => {
    const root = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]])
  })
})
