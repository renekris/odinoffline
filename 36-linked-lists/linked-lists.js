class LinkedList {
  constructor() {
    this.head;
    this.tail;

    this.size;
  }

  get tail() {
    if (this.head === undefined) return this.head;

    let tailNode = this.head;
    this.#iterateNodes((node) => {
      if (node.next === null) {
        tailNode = node;
        return true;
      }
    });

    return tailNode;
  }

  get size() {
    if (this.head === undefined) return 0;

    let nth = 0;
    this.#iterateNodes(() => {
      nth += 1;
    });
    return nth;
  }

  append(value) {
    if (this.head === undefined) {
      this.head = new Node(value);
      return this.head;
    }

    const tailNode = this.tail;
    tailNode.next = this.#createNode(value);
    return tailNode.next;
  }

  prepend(value) {
    const newNode = this.#createNode(value);
    if (this.head === undefined) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return this.head;
  }

  at(index) {
    let count = 0
    let nodeAtIndex;
    this.#iterateNodes((node) => {
      if (count === index) {
        nodeAtIndex = node;
        return true;
      }
      count += 1;
    });

    return nodeAtIndex;
  }

  pop() {
    if (this.head === undefined) return this.head;

    let poppedNode = null;
    this.#iterateNodes((node) => {
      if (node.next === null) {
        return true;
      } else if (node.next.next === null) {
        poppedNode = node.next;
        node.next = null;
      }
    });

    return poppedNode;
  }

  contains(value) {
    if (this.head === undefined) return this.head;

    let hasValue = false;
    this.#iterateNodes((node) => {
      if (node.data === value) {
        hasValue = true;
        return true;
      }
    });

    return hasValue;
  }

  findNode(value) {
    if (this.head === undefined) return this.head;

    let data = null;
    this.#iterateNodes((node) => {
      if (node.data === value) {
        data = node;
        return true;
      }
    });

    return data;
  }

  findIndex(value) {
    if (this.head === undefined) return this.head;

    let index = null;
    let count = 0;
    this.#iterateNodes((node) => {
      if (node.data === value) {
        index = count;
        return true;
      }
      count += 1;
    });

    return index;
  }

  toString() {
    if (this.head === undefined) return this.head;

    let string = '';
    this.#iterateNodes((node) => {
      if (node !== null) {
        string = `${string}( ${node.data} ) -> `;
      }
    });

    string = `${string}null`;
    return string;
  }

  insertAt(value, index) {
    if (this.head === undefined) return this.head;

    let count = 0;
    let nodeChain = null;
    const newNode = this.#createNode(value);
    this.#iterateNodes((node) => {
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        nodeChain = node;
        return true;
      } else if (index - 1 === count) {
        // Using index - 1 to remove the 'next' node from a n-1 node
        newNode.next = node.next;
        node.next = newNode;
        nodeChain = node;
        return true;
      }
      count += 1;
    });

    return nodeChain;
  }

  removeAt(index) {
    if (this.head === undefined) return this.head;

    let count = 0;
    let removedNode;
    this.#iterateNodes((node) => {
      if (index === 0) {
        removedNode = this.head;
        this.head = this.head.next;
        return true;
      } else if (index - 1 === count) {
        // Using index - 1 to remove the 'next' node from a n-1 node
        removedNode = node.next;
        node.next = node.next.next;
        return true;
      }
      count += 1;
    });

    return removedNode;
  }

  #iterateNodes(callback) {
    let currentPointer = this.head;
    while (currentPointer !== null) {
      const canBreakLoop = callback(currentPointer) || false;
      if (canBreakLoop) break;

      currentPointer = currentPointer.next;
    }
  }

  #createNode(value) {
    const newNode = new Node(value);
    return newNode;
  }
}

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

const list = new LinkedList();

console.log('Current size:', list.size);
console.log('Popped:', list.pop());
list.prepend('-1');
list.append('0');
list.append('1');
console.log('Current head:', list.head);
list.append('2');
console.log('Current tail:', list.tail);
list.append('3');
list.prepend('-2');
console.log('Current head:', list.head);
list.append('4');
console.log('Node @ 2:', list.at(2));
console.log('Current tail:', list.tail);
list.append('5');
console.log('Node @ 0:', list.at(0));
list.prepend('-3');
console.log('Node @ 0:', list.at(0));
console.log('Current size:', list.size);
list.append('6');
list.append('7');
console.log('Node @ 5:', list.at(5));
console.log('Current head:', list.head);
console.log('Current tail:', list.tail);
console.log('Popped:', list.pop());
console.log('Current tail:', list.tail);
console.log('Checks if list contains string "4":', list.contains('4'));
console.log('Find node with value "2":', list.findNode('2'));
console.log('Find index with value "5":', list.findIndex('5'));
console.log(list.toString());
console.log(list.insertAt('Inserted @ index 3 first', 3));
console.log(list.toString());
console.log(list.insertAt('Inserted @ index 1 second', 1));
console.log(list.toString());
console.log(list.insertAt('Inserted @ index 0 third', 0));
console.log(list.toString());
console.log('Remove index 5', list.removeAt(5));
console.log('Remove index 0', list.removeAt(0));
console.log(list.toString());

