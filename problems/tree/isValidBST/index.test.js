const { TreeNode, isValidBST } = require('./solution')

describe('isValidBST', () => {
  // [2,1,3]
  test('isValidBST1', () => {
    const root = new TreeNode(2)
    root.left = new TreeNode(1)
    root.right = new TreeNode(3)
    expect(isValidBST(root)).toBe(true)
  })
  // [5,1,4,null,null,3,6]
  test('isValidBST2', () => {
    const root = new TreeNode(5)
    root.left = new TreeNode(1)
    root.right = new TreeNode(4)
    root.right.left = new TreeNode(3)
    root.right.right = new TreeNode(6)
    expect(isValidBST(root)).toBe(false)
  })
  // [5,4,6,null,null,3,7]
  test('isValidBST3', () => {
    const root = new TreeNode(5)
    root.left = new TreeNode(4)
    root.right = new TreeNode(6)
    root.right.left = new TreeNode(3)
    root.right.right = new TreeNode(7)
    expect(isValidBST(root)).toBe(false)
  })
  // [3,1,5,0,2,4,6]
  test('isValidBST4', () => {
    const root = new TreeNode(3)
    root.left = new TreeNode(1)
    root.right = new TreeNode(5)
    root.left.left = new TreeNode(0)
    root.left.right = new TreeNode(2)
    root.right.left = new TreeNode(4)
    root.right.right = new TreeNode(6)
    expect(isValidBST(root)).toBe(true)
  })
  //[32,26,47,19,null,null,56,null,27]
  test('isValidBST5', () => {
    const root = new TreeNode(32)
    root.left = new TreeNode(26)
    root.right = new TreeNode(47)
    root.left.left = new TreeNode(19)
    root.left.left.right = new TreeNode(27)
    root.right.right = new TreeNode(56)
    expect(isValidBST(root)).toBe(false)
  })
  // [120,70,140,50,100,130,160,20,55,75,110,119,135,150,200]
  test('isValidBST6', () => {
    const root = new TreeNode(120)
    root.left = new TreeNode(70)
    root.right = new TreeNode(140)
    root.left.left = new TreeNode(50)
    root.left.right = new TreeNode(100)
    root.right.left = new TreeNode(130)
    root.right.right = new TreeNode(160)
    root.left.left.left = new TreeNode(20)
    root.left.left.right = new TreeNode(55)
    root.left.right.left = new TreeNode(75)
    root.left.right.right = new TreeNode(110)
    root.right.left.left = new TreeNode(119)
    root.right.left.right = new TreeNode(135)
    root.right.right.left = new TreeNode(150)
    root.right.right.right = new TreeNode(200)
    expect(isValidBST(root)).toBe(false)
  })
})
