const { ListNode, removeNthFromEnd } = require('./solution.js')

describe('removeNthFromEnd', () => {
  it('should remove the nth node from the end of the list', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
    const expected = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(5)))
    )
    expect(removeNthFromEnd(head, 2)).toEqual(expected)
  })
})
