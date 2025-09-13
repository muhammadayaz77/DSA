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
}

let list = new List(100);
list.appendNode(200);
list.appendNode(300);

console.log(JSON.stringify(list, null, 2));
