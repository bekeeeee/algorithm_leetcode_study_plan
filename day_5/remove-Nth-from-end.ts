import { ListNode } from "./middle_of_linked_list";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const arr: number[] = [];
  let current: ListNode = head!;
  while (current) {
    arr.push(current.val);
    current = current.next!;
  }
  arr.splice(-n, 1);
  head = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    head = new ListNode(arr[i], head);
  }
  return head;
}

const head = new ListNode();
head.val = 1;
head.next = new ListNode(
  2,
  new ListNode(3, new ListNode(4, new ListNode(5, null)))
);

console.log(JSON.stringify(removeNthFromEnd(head, 2)));
