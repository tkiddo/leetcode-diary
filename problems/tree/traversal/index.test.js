const { TreeNode, inorder, preorder, postorder } = require('./solution')

describe('inorder', () => {
  // [3,1,5,0,2,4,6]
  it('returns an array of values in inorder traversal', () => {
    const root = new TreeNode(3)
    root.left = new TreeNode(1)
    root.right = new TreeNode(5)
    root.left.left = new TreeNode(0)
    root.left.right = new TreeNode(2)
    root.right.left = new TreeNode(4)
    root.right.right = new TreeNode(6)
    expect(inorder(root)).toEqual([0, 1, 2, 3, 4, 5, 6])
  })
  it('returns an array of values in preorder traversal', () => {
    const root = new TreeNode(3)
    root.left = new TreeNode(1)
    root.right = new TreeNode(5)
    root.left.left = new TreeNode(0)
    root.left.right = new TreeNode(2)
    root.right.left = new TreeNode(4)
    root.right.right = new TreeNode(6)
    expect(preorder(root)).toEqual([3, 1, 0, 2, 5, 4, 6])
  }),
    it('returns an array of values in postorder traversal', () => {
      const root = new TreeNode(3)
      root.left = new TreeNode(1)
      root.right = new TreeNode(5)
      root.left.left = new TreeNode(0)
      root.left.right = new TreeNode(2)
      root.right.left = new TreeNode(4)
      root.right.right = new TreeNode(6)
      expect(postorder(root)).toEqual([0, 2, 1, 4, 6, 5, 3])
    })
})
