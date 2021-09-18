let arr = [1,0,0,2,0]


//METHOD 1 - Naive solution
let moveZeroes = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[j] != 0) {
                    let temp = arr[i];
                    arr[i] = arr[j]
                    arr[j] = temp
                }
            }
        }
    }
    return arr
}

//METHOD 2 - Efficient solution
let moveZeroesEfficient = (arr) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != 0) {
            let temp = arr[i];
            arr[i] = arr[count]
            arr[count] = temp
            count++;
        }
    }
    return arr
}

console.log(moveZeroesEfficient(arr))

