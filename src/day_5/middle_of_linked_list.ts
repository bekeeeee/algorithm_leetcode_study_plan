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

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function middleNode(head: ListNode | null): ListNode | null {
  let fastSearch: ListNode = head!;

  while (fastSearch && fastSearch.next) {
    head = head?.next!;
    fastSearch = fastSearch?.next?.next!;
  }
  return head;
}

const head = new ListNode();
head.val = 1;
head.next = new ListNode(
  2,
  new ListNode(3, new ListNode(4, new ListNode(5, null)))
);
console.log("linked list222", middleNode(head));
