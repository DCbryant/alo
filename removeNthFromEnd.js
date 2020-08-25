const removeNthFromEnd  = (head, n) => {
  const dummy = new ListNode()
  dummy.next = head;

  let fast = dummy;
  let slow = dummy

  // 快指针闷头走 n 步
  while (n !== 0) {
    fast = fast.next
    n--
  }

  // 快慢指针一起走
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  // 慢指针删除自己的后继结点
  slow.next = slow.next.next
  return dummy.next
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}