let arr = [1,3,4,5];
let deleteVal = 3;

let indexOfDeleteVal = arr.indexOf(deleteVal)

arr.splice(indexOfDeleteVal, 1)
console.log(arr)