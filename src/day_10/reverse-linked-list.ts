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

import { ListNode } from "./merge-two-sorted-lists";

function reverseList(head: ListNode | null): ListNode | null {
  let newHead: ListNode | null = null;

  while (head !== null) {
    let next: ListNode | null = head.next;
    head.next = newHead;
    newHead = head;
    head = next;
  }

  return newHead;
}

let list1: ListNode | null = new ListNode(
  1,

  new ListNode(
    2,
    new ListNode(
      4,

      new ListNode(8, new ListNode(9, new ListNode(10, new ListNode(11, null))))
    )
  )
);

console.log(JSON.stringify(reverseList(list1)));
