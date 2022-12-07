const {TreeNode,maxDepth} = require('./solution')

describe('maxDepth', () => {
  it('should return the maximum depth of a binary tree', () => {
    const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
    expect(maxDepth(tree)).toEqual(3)
  })
})