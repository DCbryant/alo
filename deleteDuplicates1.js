const deleteDuplicates = head => {
  if (!head || !head.next) {
    return head;
  }
  let dummy = new ListNode() 
  // dummy 永远指向头结点
  dummy.next = head 

  // cur 从 dummy 开始遍历
  let cur = dummy
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
       // 若值重复，则记下这个值
       let val = cur.next.val
       // 反复地排查后面的元素是否存在多次重复该值的情况
      while(cur.next && cur.next.val === val) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }

  return dummy.next
}


function ListNode(val) {
  this.val = val;
  this.next = null;
}