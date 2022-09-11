/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "../tree";

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 && !root2) {
    return null;
  }

  if (!root1 || !root2) {
    return root1 || root2;
  }

  let reTree = new TreeNode(root1?.value! + root2?.value!);
  reTree.left = mergeTrees(root1.left, root2.left);
  reTree.right = mergeTrees(root1.right, root2.right);

  return reTree;
}

let leftTree = new TreeNode(
  2,
  new TreeNode(3, new TreeNode(5, null, null), new TreeNode(6, null, null)),
  new TreeNode(4, new TreeNode(7, null, null), new TreeNode(8, null, null))
);
let rightTree = new TreeNode(6, null, null);

let root1 = new TreeNode(1, leftTree, leftTree);

console.log(JSON.stringify(mergeTrees(root1, root1)));

/*
              1
            
            2    
        3      4
      5   6  7   8




*/
