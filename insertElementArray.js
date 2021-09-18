let arr = [1,3,4,5];
let insertVal = 2;
let pos = 3;

//METHOD 1
let insertElem = (arr, insertVal, pos) => {
    let indexInsertion = pos - 1;

    for(let i = arr.length - 1; i >= indexInsertion; i--) {
        arr[i+1] = arr[i]
    }
    arr[indexInsertion] = insertVal

    return arr
}

//METHOD 2
// arr.splice(pos-1, 0, insertVal)

console.log(insertElem(arr, insertVal, pos))

