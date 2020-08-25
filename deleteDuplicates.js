const deleteDuplicates = head => {
  let cur = head;
  while (cur !== null && cur.next !== null) {
    // 因为链表有序，所以可以这么写
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
}