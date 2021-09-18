let arr = [1,2,3,4,5];

const leftRotateArray = (arr) => {
    let temp = arr [0];

    for(let i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i]
    }

    arr[arr.length - 1] = temp;
    return arr;
}


const leftRotateArrayByDElements = (arr) => {
    let d = 2
    for(let i = 0; i < d; i++) {
        leftRotateArray(arr)
    }
    return arr
}

console.log(leftRotateArrayByDElements(arr))