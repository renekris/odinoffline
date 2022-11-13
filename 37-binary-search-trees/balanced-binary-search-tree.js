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
    this.root = this.#insertRec(this.root, value);
    return this.root;
  }

  delete(value) {
    this.root = this.#deleteRec(this.root, value);
    return this.root;
  }

  find(value) {
    return this.#findRec(this.root, value);
  }

  levelOrder(callback = null) {
    let queue = [];
    let array = [];

    queue.push(this.root);
    while (queue.length > 0) {
      const current = queue.shift();
      if (callback !== null) {
        callback(current);
      } else {
        array.push(current);
      }

      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }

    return array;
  }

  preOrder(callback) {
    return this.#preOrderRec(callback);
  }

  inOrder(callback) {
    return this.#inOrderRec(callback);
  }

  postOrder(callback) {
    return this.#postOrderRec(callback);
  }

  height(node = this.root) {
    if (node === null) {
      return 0;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(node = this.root) {
    let depth = 2; // index0 = 1 AND order of operations = 1
    let queue = [];
    let isFound = false;

    queue.push(this.root);
    queue.push(null);
    while (queue.length > 0) {
      let current = queue.shift();
      if (current === null) {
        depth += 1;
      }

      if (current !== null) {
        if (current.left) {
          if (current.left === node) {
            isFound = true;
            break;
          }
          queue.push(current.left);
        }
        if (current.right) {
          if (current.right === node) {
            isFound = true;
            break;
          }
          queue.push(current.right);
        }
      } else if (queue.length > 0) {
        queue.push(null);
      }
    }
    if (isFound) {
      return depth;
    } else {
      return 0;
    }
  }

  reBalance() {
    const orderArray = [];
    this.inOrder((node) => { orderArray.push(node.data) });
    this.root = this.buildTree([...new Set(orderArray)].sort(this.#sortArray));
  }

  #preOrderRec(callback = null, root = this.root, array = []) {
    if (root === null) return null;

    if (callback !== null) callback(root);
    else array.push(root);
    this.#preOrderRec(callback, root.left, array);
    this.#preOrderRec(callback, root.right, array);

    return array;
  }

  #inOrderRec(callback = null, root = this.root, array = []) {
    if (root === null) return null;

    this.#inOrderRec(callback, root.left, array);
    if (callback !== null) callback(root);
    else array.push(root);
    this.#inOrderRec(callback, root.right, array);

    return array;
  }

  #postOrderRec(callback = null, root = this.root, array = []) {
    if (root === null) return null;

    this.#postOrderRec(callback, root.left, array);
    this.#postOrderRec(callback, root.right, array);
    if (callback !== null) callback(root);
    else array.push(root);

    return array;
  }

  #minValue(root) {
    let minValue = root.data;
    while (root.left !== null) {
      minValue = root.left.data;
      root = root.left;
    }
    return minValue;
  }

  #deleteRec(root, value) {
    if (root === null) return root;

    if (value < root.data) {
      root.left = this.#deleteRec(root.left, value);
    } else if (value > root.data) {
      root.right = this.#deleteRec(root.right, value);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      root.data = this.#minValue(root.right);
      root.right = this.#deleteRec(root.right, root.data);
    }
    return root;
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

  #findRec(root, value) {
    if (root === null || root.data === value) {
      return root;
    }

    if (root.data < value) {
      return this.#findRec(root.right, value);
    }

    return this.#findRec(root.left, value);
  }

  #contains(value) {
    const result = this.find(value);
    return result === null ? false : true;
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
tree.insert(5291);
tree.delete(5);
tree.insert(10);
tree.insert(44);
tree.delete(8);
tree.insert(22);
tree.insert(2);
tree.reBalance();
prettyPrint(tree.root);
// console.log(tree.find(1));
// tree.levelOrder(((value) => console.log(`Value:`, value.data)));
// tree.preOrder(((value) => console.log(`Value:`, value.data)));
// tree.inOrder(((value) => console.log(`Value:`, value.data)));
// tree.postOrder(((value) => console.log(`Value:`, value.data)));

// Height is defined as the number of edges in longest path from a given node to a leaf node.
console.log(`Height is:`, tree.height(tree.find(4)));

// Depth is defined as the number of edges in path from a given node to the tree’s root node.
console.log(`Depth is:`, tree.depth(tree.find(6345)));

