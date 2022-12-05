const { ListNode, isPalindrome } = require('./solution')

describe('isPalindrome', () => {
  it('isPalindrome', () => {
    const head = new ListNode(1)
    head.next = new ListNode(2)
    head.next.next = new ListNode(2)
    head.next.next.next = new ListNode(1)
    expect(isPalindrome(head)).toEqual(true)
  })
})
