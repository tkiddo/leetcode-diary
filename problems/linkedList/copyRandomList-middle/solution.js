/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return head
  }
  const map = new Map()
  const copy = (node) => {
    if (!node) {
      return null
    }
    if (map.has(node)) {
      return map.get(node)
    }
    const newNode = new Node(node.val)
    map.set(node, newNode)
    newNode.next = copy(node.next)
    newNode.random = copy(node.random)
    return newNode
  }
  return copy(head)
}
