


let arr:number[] = [1,2,3,4,5];

let firstLoc = 0;
let lastLoc = arr.length;
// console.log(lastLoc)
let enqueue = (num : number) => {
  arr[lastLoc] = num
  lastLoc++;
}
let dequeue = () => {
  if(arr.length <= 0){
    console.log('already empty');
  }
  else{
    for(let i = 0;i<arr.length;i++){
      arr[i] = arr[i+1]
    }
    lastLoc--;
    arr.length = lastLoc;
  }
}
enqueue(10)
enqueue(10)
enqueue(10)
dequeue()
dequeue()
console.log(arr)