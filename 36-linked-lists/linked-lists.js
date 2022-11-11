class LinkedList {
  constructor() {
    this.head;
    this.tail;
  }

  get tail() {
    if (this.head === undefined) return this.head;

    let currentPointer = this.head;
    while (currentPointer !== null) {
      if (currentPointer.next === null || undefined) {
        return currentPointer;
      }
      currentPointer = currentPointer.next;
    }
  }

  append(value) {
    if (this.head === undefined) {
      this.head = new Node(value);
      return this.head;
    }

    return this.#createNode(this.tail, value);
  }

  #createNode(currentPointer, value) {
    const newNode = new Node(value);
    currentPointer.next = newNode;
    return currentPointer.next;
  }
}

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

const list = new LinkedList();

list.append('0');
list.append('1');
console.log(list.head);
list.append('2');
console.log(list.tail);
list.append('3');
list.append('4');
console.log(list.tail);
list.append('5');
list.append('6');
list.append('7');
console.log(list.head);
console.log(list.tail);
