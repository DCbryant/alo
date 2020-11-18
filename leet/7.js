/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  while (head && head.next) {
      const next = head.next;
      // 反转
      head.next = next.next;
      next.next = head;
      prev.next = next;

      // 循环
      prev = head;
      head = head.next;
  }
  return dummy.next;
}
