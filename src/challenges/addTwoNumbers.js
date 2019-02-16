// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function addTwoNumbers(l1, l2) {
  let prev = 0;
  const retVal = new ListNode();
  let node = retVal;
  while (l1 !== null || l2 !== null || prev !== 0) {
    if (Number.isInteger(node.val)) {
      node.next = new ListNode();
      node = node.next;
    }
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + prev;
    node.val = (sum % 10);
    prev = Math.floor(sum / 10);

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return retVal;
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2));

l1 = new ListNode(3);

l2 = new ListNode(7);

console.log(addTwoNumbers(l1, l2));

l1 = new ListNode(3);
l1.next = new ListNode(1);

l2 = new ListNode(7);

console.log(addTwoNumbers(l1, l2));

l1 = new ListNode(1);
l1.next = new ListNode(8);

l2 = new ListNode(0);

console.log(addTwoNumbers(l1, l2));


l1 = new ListNode(9);
l1.next = new ListNode(9);

l2 = new ListNode(1);

console.log(addTwoNumbers(l1, l2));
