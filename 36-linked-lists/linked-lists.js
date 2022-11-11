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
