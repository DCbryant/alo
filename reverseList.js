const reverseList = head => {
  // 初始化前驱结点为 null
  let pre = null
  let cur = head;
  // 只要目标结点不为 null，遍历就得继续
  while (cur !== null) {
    let next = cur.next
    // 反转指针
    cur.next = pre
    // pre 往前走一步
    pre = cur;
    // cur往前走一步
    cur = next;
  }
  // 反转结束后，pre 就会变成新链表的头结点
  return pre
}