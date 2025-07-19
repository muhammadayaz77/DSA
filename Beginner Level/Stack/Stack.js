var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var len = arr.length;
console.log(arr.length);
var stack = function (num) {
    if (arr.length == 0) {
        arr.length = 0;
    }
    arr[len] = num;
    len++;
    console.log(arr);
};
var pop = function () {
    if (len <= 0) {
        console.log("Stack is already empty");
    }
    else {
        len--;
        arr.length = len;
        console.log('Pop : ', arr);
    }
};
stack(10);
stack(11);
stack(12);
pop();
pop();
pop();
pop();
pop();
pop();
pop();
pop();
pop();
pop();
pop();
pop();
stack(2);
stack(2);
stack(2);
pop();
pop();
pop();
pop();
pop();
stack(1);
console.log(arr.length);
