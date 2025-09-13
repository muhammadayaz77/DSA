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

  // 🔹 Update by value (first match)
  updateByValue(oldValue: number, newValue: number): void {
    let current: NodeType | null = this.head;
    while (current !== null) {
      if (current.value === oldValue) {
        current.value = newValue;
        return; // stop after first update
      }
      current = current.next;
    }
  }

  // 🔹 Update by index
  updateByIndex(index: number, newValue: number): void {
    if (index < 0 || index >= this.size) return;

    let current: NodeType | null = this.head;
    let i = 0;

    while (current !== null) {
      if (i === index) {
        current.value = newValue;
        return;
      }
      current = current.next;
      i++;
    }
  }
}

let list = new List(100);
list.appendNode(200);
list.appendNode(300);
list.appendNode(400);

console.log("Before Update:", list.toArray());

list.updateByValue(200, 250);
console.log("After updateByValue(200→250):", list.toArray());

list.updateByIndex(2, 350);
console.log("After updateByIndex(2→350):", list.toArray());
