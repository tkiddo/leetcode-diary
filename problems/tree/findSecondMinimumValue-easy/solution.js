/**
 * Definition for a binary tree node.
 
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  const min = root.val
  let result = -1
  const dfs = (node) => {
    if (node.val > min) {
      if(result===-1){
        result=node.val
      }else{
        result = Math.min(node.val,result)
      }
    }
    node.left && dfs(node.left)
    node.right && dfs(node.right)
  }
  dfs(root)
  return result
}

module.exports = {
  TreeNode,
  findSecondMinimumValue,
}
