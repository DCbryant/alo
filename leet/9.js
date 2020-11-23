/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function(head) {
  const buildTree = (left, right) => {
    if (!left || left === right) return null

    let slow = left
    let fast = left

    // 寻找中间节点
    while (fast !== right && fast.next !== right)  {
      slow = slow.next
      fast = fast.next.next
    }

    const root = new TreeNode(slow.val)
    root.left = buildTree(left, slow)
    root.right = buildTree(slow.next, right)
    return root
  }

  if (!head) return null
  return buildTree(head, null)
};