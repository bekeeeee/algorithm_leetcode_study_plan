export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(value?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.value = value === undefined ? 0 : value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  static BFS(root: TreeNode | null) {
    var node: TreeNode = root!,
      data: number[] = [],
      queue: TreeNode[] = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift()!;
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }
  insert(value: number) {
    var newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value: number) {
    if (this.root === null) return false;
    var current = this.root!,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left!;
      } else if (value > current.value) {
        current = current.right!;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value: number) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left!;
      } else if (value > current.value) {
        current = current.right!;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    var node: TreeNode = this.root!,
      data: number[] = [],
      queue: TreeNode[] = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift()!;
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
