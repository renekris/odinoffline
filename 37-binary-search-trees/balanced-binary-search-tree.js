class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  setLeft(leftData) {
    this.left = leftData;
  }

  setRight(rightData) {
    this.right = rightData;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree([...new Set(array)].sort(this.#sortArray));
  }

  buildTree(sortedArray, start = 0, end = sortedArray.length - 1) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new Node(sortedArray[mid]);

    root.setLeft(this.buildTree(sortedArray, start, mid - 1));
    root.setRight(this.buildTree(sortedArray, mid + 1, end));

    return root;
  }

  insert(value) {
    // const hasValue = this.#contains(this.root, value);
    this.root = this.#insertRec(this.root, value);
    // if (!hasValue) {
    // }
  }

  #insertRec(root, value) {
    if (root === null) {
      root = new Node(value);
      return root;
    }

    if (value < root.data) {
      root.left = this.#insertRec(root.left, value);
    } else if (value > root.data) {
      root.right = this.#insertRec(root.right, value);
    }

    return root;
  }

  #search(root, key) {
    if (root === null || root.data === key) {
      return root;
    }

    if (root.data < key) {
      return this.#search(root.right, key);
    }

    return this.#search(root.left, key);
  }

  #contains(root, key) {
    const result = this.#search(root, key);
    if (result === null) {
      return false;
    } else {
      return true;
    }
  }

  #sortArray(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
}

function prettyPrint(node, prefix = '', isLeft = true) {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tree = new Tree(array);
tree.insert(55);
tree.insert(42);
tree.insert(10);
prettyPrint(tree.root);
