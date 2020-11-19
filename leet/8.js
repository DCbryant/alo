/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function(head, k) {
  if (!head) return null;
  if (k === 0 || !head.next) return head
  let slow = head
  let fast = head
  let tem = head

  let len = 1
  while (tem.next) {
    tem = tem.next
    len++
  }

  k = k % len

  for (let i = 0; i < k; i++) {
    fast = fast.next
  }

  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  fast.next = head // 完成旋转
  const newHead = slow.next // 新的头结点指向确认
  slow.next = null // 断开

  return newHead
};
