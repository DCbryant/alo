const mergeTwoLists = (l1, l2) => {
  // 定义头结点，确保链表可以被访问到
  const head = new ListNode();

  let cur = head;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      // l1 指针向前一步
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2.next = l2;
    }
    cur = cur.next;
  }

  // 处理链表不等长的情况
  cur.next = l1 !== null ? l1 : l2;
  return head.next
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}