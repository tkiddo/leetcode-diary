const { ListNode, deleteNode } = require('./solution.js')

describe('deleteNode', () => {
  it('should delete a node from a linked list', () => {
    const node = new ListNode(4)
    node.next = new ListNode(5)
    node.next.next = new ListNode(1)
    node.next.next.next = new ListNode(9)
    deleteNode(node.next)
    expect(node).toEqual({
      val: 4,
      next: {
        val: 1,
        next: {
          val: 9,
          next: null,
        },
      },
    })
  })
})
