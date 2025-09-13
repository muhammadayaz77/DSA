type NodeType = {
  value: number;
  next: NodeType | null;
};

class List {
  head: NodeType;
  tail: NodeType;
  size: number;

  constructor(data: number) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  appendNode(nodeData: number): void {
    const newNode: NodeType = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  traverse(): void {
    let current: NodeType | null = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  toArray(): number[] {
    const result: number[] = [];
    let current: NodeType | null = this.head;
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  // 🔹 Delete node by value
  deleteByValue(value: number): void {
    if (!this.head) return;

    // case 1: head is the node to delete
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current: NodeType | null = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        // unlink the node
        current.next = current.next.next;
        // if deleted was tail, update tail
        if (current.next === null) {
          this.tail = current;
        }
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  // 🔹 Delete node by index
  deleteByIndex(index: number): void {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.head = this.head.next!;
      this.size--;
      return;
    }

    let current: NodeType | null = this.head;
    let prev: NodeType | null = null;
    let i = 0;

    while (current !== null && i < index) {
      prev = current;
      current = current.next;
      i++;
    }

    if (prev && current) {
      prev.next = current.next;
      if (current === this.tail) {
        this.tail = prev;
      }
      this.size--;
    }
  }
}

let list = new List(100);
list.appendNode(200);
list.appendNode(300);
list.appendNode(400);

console.log("Before Delete:", list.toArray());

list.deleteByValue(200); // delete value 200
console.log("After deleteByValue(200):", list.toArray());

list.deleteByIndex(1); // delete index 1 (which is now 300)
console.log("After deleteByIndex(1):", list.toArray());
