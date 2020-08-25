const reverseBetween  = (head, m ,n) => {
  // 定义pre、cur，用leftHead来承接整个区间的前驱结点
  let pre, cur, leftHead
  const dummy = new ListNode()
  dummy.next = head

  // p是一个游标，用于遍历，最初指向 dummy
  let p = dummy
  // p往前走 m-1 步，走到整个区间的前驱结点处
  for (let i = 0; i < m; i++) {
    p = p.next
  }

  // 缓存这个前驱结点到 leftHead 里
  leftHead = p
  // start 是反转区间的第一个结点
  let start = leftHead.next
  // pre 指向start

  pre = start

   // cur 指向 start 的下一个结点
   cur = start.next

  // 开始重复反转动作
  for (let i = m; i < n; i++) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  //  leftHead 的后继结点此时为反转后的区间的第一个结点
  leftHead.next = pre

  // 将区间内反转后的最后一个结点 next 指向 cur
  start.next = cur
  // dummy.next 永远指向链表头结点
  return dummy.next
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}