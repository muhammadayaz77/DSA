type NodeType = {
  value : number,
  next : null | {}
}

class List {
  constructor(data){
    this.head : NodeType = {
      value : data,
      next : null,
    }
    this.tail = this.head;
    this.size = 1;
  }
  appendNode(nodeData){
    let newNode = {
      value : nodeData,
      next : null,
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }
}
// let tail = {
//   value : 100,
//   next : {
//     value:200
//     next : null
//   }
// }
let list = new List('100');
list.appendNode('200')
list.appendNode('300')
console.log(list)