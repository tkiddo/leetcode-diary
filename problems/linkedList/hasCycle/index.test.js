const {ListNode,hasCycle} = require('./solution')

describe.skip('hasCycle', () => {
  it('should return true if the list has a cycle', () => {
    const head = new ListNode(1)
    head.next = new ListNode(2)
    head.next.next = new ListNode(3)
    head.next.next.next = new ListNode(4)
    head.next.next.next.next = new ListNode(5)
    head.next.next.next.next.next = new ListNode(6)
    head.next.next.next.next.next.next = head.next.next

    expect(hasCycle(head)).toBe(true)
  })

  it('should return false if the list does not have a cycle', () => {
    const head = new ListNode(1)
    head.next = new ListNode(2)
    head.next.next = new ListNode(3)
    head.next.next.next = new ListNode(4)
    head.next.next.next.next = new ListNode(5)
    head.next.next.next.next.next = new ListNode(6)

    expect(hasCycle(head)).toBe(false)
  })
})

