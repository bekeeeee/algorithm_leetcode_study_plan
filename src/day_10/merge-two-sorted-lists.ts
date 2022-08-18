//   Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let ar1: number[] = [];
  let ar2: number[] = [];
  let ar: number[] = [];
  let p1: number = 0;
  let p2: number = 0;
  let reList: ListNode | null = null;
  if (!list1) return list2;
  else if (!list2) return list1;
  while (list1) {
    ar1.push(list1.val);
    list1 = list1.next;
  }
  while (list2) {
    ar2.push(list2.val);
    list2 = list2.next;
  }

  while (p1 < ar1.length || p2 < ar2.length) {
    console.log("p1: " + p1 + ", p2: " + p2);
    if (p2 >= ar2.length || ar1[p1] <= ar2[p2]) {
      ar.push(ar1[p1]);
      p1++;
    } else {
      ar.push(ar2[p2]);
      p2++;
    }
  }
  console.log("ar", ar1);
  console.log("ar", ar2);
  console.log("ar", ar);

  reList = new ListNode(ar[ar.length - 1], null);
  for (let i = ar.length - 2; i >= 0; i--) {
    reList = new ListNode(ar[i], reList);
  }
  console.log("reList", JSON.stringify(reList));
  return reList;
}

let list1: ListNode | null = new ListNode(
  2,
  null
  //   new ListNode(
  //     2,
  //     new ListNode(
  //       4,
  //       null
  //       //   new ListNode(8, new ListNode(9, new ListNode(10, new ListNode(11, null))))
  //     )
  //   )
);

let list2: ListNode | null = new ListNode(
  1,
  null
  //   new ListNode(
  //     3,
  //     new ListNode(
  //       4,
  //       null
  //       //   new ListNode(4, new ListNode(5, new ListNode(15, new ListNode(17, null))))
  //     )
  //   )
);

// mergeTwoLists(new ListNode(undefined, null), new ListNode(undefined, null));
// mergeTwoLists(list1, list2);

// const arr: number[] = [];

// while (list1) {
//   arr.push(list1.val);
//   list1 = list1.next;
// }
// console.log(arr);

// let ar1: number[] = [1, 2, 3];
// let ar2: number[] = [4, 5, 6];
// ar1.push(...ar2.slice(1));
// console.log(ar1);
