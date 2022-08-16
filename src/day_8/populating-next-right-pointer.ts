/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class NextNode {
  val: number;
  left: NextNode | null;
  right: NextNode | null;
  next: NextNode | null;
  constructor(
    val?: number,
    left?: NextNode,
    right?: NextNode,
    next?: NextNode
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

/*

              1
        
         2        3
    
     4       5   6       7


*/
function connect(root: NextNode | null): NextNode | null {
  if (root === null) return root;

  let _root = root;
  while (_root.left !== null) {
    let head = _root;
    while (head !== null) {
      head.left!.next = head?.right!;
      if (head.next !== null) head.right!.next = head.next?.left;

      head = head.next!;
    }
    _root = _root.left;
  }
  return root;
}

let root = new NextNode(
  1,
  new NextNode(2, new NextNode(4), new NextNode(5)),
  new NextNode(3, new NextNode(6), new NextNode(7))
);

console.log(JSON.stringify(connect(root)));
