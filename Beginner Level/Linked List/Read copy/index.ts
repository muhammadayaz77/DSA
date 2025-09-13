

type NodeType = {
  value : number,
  next : null | NodeType
}


class List {
  head : NodeType
  tail : NodeType
  size : number
  
  constructor(data : number) {
    this.head = {
        value : data,
        next : null
    }
    this.tail = this.head;
    this.size = 1
  }
  appendNode(newData : number){
    const newNode : NodeType = {
        value : newData,
        next : null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size +=1
  }
  traverse(){
    let current : NodeType | null = this.head
    while(current != null){
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new List(10);
list.appendNode(20);
list.appendNode(20);
list.appendNode(20);
list.appendNode(20);
list.traverse()

// console.log(JSON.stringify(list,null,2))