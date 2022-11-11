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
      if (node.next === null || undefined) {
        tailNode = node;
      }
    })

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

  #iterateNodes(callback) {
    let currentPointer = this.head;
    while (currentPointer !== null) {
      callback(currentPointer);
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

console.log(list.size);
list.prepend('-1');
list.append('0');
list.append('1');
console.log(list.head);
list.append('2');
console.log(list.tail);
list.append('3');
list.prepend('-2');
console.log(list.head);
list.append('4');
console.log(list.tail);
list.append('5');
list.prepend('-3');
list.append('6');
list.append('7');
console.log(list.head);
console.log(list.tail);
console.log(list.size);
