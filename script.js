// let data = [1,2,3,4,5,6];
// let currSize = data.length;
// let maxSize = 5;
// function Push(newVal)
// {
//     if(currSize>=maxSize)
//     {
//         alert('Stack is Full')
//     }
//     else
//     {
//         data[currSize] = newVal;
//         currSize+=1;
//     }
// }
// function Pop()
// {
//     if(currSize<=0)
//     {
//         alert('Stack is empty')
//     }
//     else
//     {
//         currSize-=1;
//         data.length = currSize;
//     }
// }
// Pop()
// Pop()
// Pop()
//     console.log(data)

// let data1 = [2,5,6,11,20,36,47];
// let data2 = [1,7,16,26,46,78,79,100,102];
// let data3 = [];
// let d1 = d2 = d3 = 0;
// while(d1<data1.length && d2<data2.length)
// {
//     if(data1[d1]<data2[d2])
// {
//     data3[d3] = data1[d1];
//     d1++;
// }
// else 
// {
//     data3[d3] = data2[d2];
//     d2++
// }
// d3++;
// }

// while(d2<data2.length){
//     data3[d3] = data2[d2];
//     d3++
//     d2++
// }
// console.log(data3)


// let data = [3,5,11,6,1,7,2];
// for(let j = 0;j<data.length;j++){
//     for(let i = 0;i<data.length;i++){
//     if(data[i]>data[i+1]){
//         let temp = data[i];
//         data[i] = data[i+1]
//         data[i+1] = temp;
//     }
// }
// }
// console.log(data)

// let data = [];
// let currSize = data.length;

// function Push(item){
//     data[currSize] = item;
//     currSize+=1;
// }
// function Pop(){
//     currSize-=1;
//     data.length = currSize;
// }
// Push(10);
// Push(10);
// Push(10);
// Push(10);
// // console.log(data)





// let data = [];
// let currSize = data.length;

// function Push(item){
//     data[currSize] = item;
//     currSize++;
// }
// function Pop(){
//     let newItem = data[currSize-1];
//     currSize--;
//     data.length = currSize;
//     return newItem;
// }

// function reverseStack(item){
    
//     for(let i = 0;i<item.length;i++)
// {
//     Push(item[i]);
// }
// for(let i = 0;i<item.length;i++)
// {
//     item[i] = Pop();
// }

// }
// let item = 'light'
// item = item.split('')
// reverseStack(item)

// console.log(item.join(''))

// let data = []
// let arraySize = data.length;

// function Push(digit) {
//     data[arraySize] = digit;
//     arraySize += 1;
// }
// function Pop(){
//     arraySize -= 1;
//     data.length = arraySize
// }
// Push(19)
// Push(19)
// Push(19)
// Pop()
// Pop()
// Pop()
// Push(19)
// Push(19)

// Push(19)
// console.log(data)


//     let data = [5,3,2];

//     for(let i = 0;i<data.length;i++)
// {
//     let minId = i;
//     for(let j = i+1;j<data.length;j++)
// {
//     if(data[j] < data[minId])
// {
//     minId = j;
// }
// }
// let temp = data[minId];
// data[minId] = data[i];
// data[i] = temp
// }
// console.log(data)

// let data = [2,6,1,3,8]
// for(let i = 0;i<data.length;i++)
// {
//     let minId = i;
//     for(let j=i+1;j<data.length;j++)
// {
//     if(data[j] < data[minId])
// {
//     mindId = j;
// }
// }
// let temp = data[minId];
// data[mindId] = data[i];
// data[i] = temp;
// console.log(data);
// }
// console.log(data)

// ayaya

// start = 0 , end = 5

// let result = true;

// function Palindrome(data){
//     let start = 0,end = data.length - 1;
//     while(end > start)
//     {
//         if(data[start] !== data[end])
//     {
//         result = false;
//     }
//     start++;
//     end--;
//     }
//     return result;
// }
// let str = 'aayaaaabaaaayaa';
// Palindrome(str)

// if(result)
// {
//     alert('It is palindrome')
// }
// else{
//             alert('It is not palidrome');
//         }


class List {
  constructor(data){
    this.head = {
      value : data,
      next : null,
    }
    this.tail = this.head;
  }
  appendNode(currNode){
    let newNode = {
      value : currNode,
      next : null,
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

let list = new List('100');
list.appendNode('200')
list.appendNode('300')
list.appendNode('400')
list.appendNode('500')
list.appendNode('600')
console.log(list)