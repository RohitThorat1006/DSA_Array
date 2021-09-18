let arr = [1,2,3,4]

//METHOD 1
arr.reverse()

//METHOD 2
let newarr = []
for(let i = arr.length-1; i >= 0; i--) {
    newarr.push(arr[i])
}

// METHOD 3
let reverseFunc = (arr) => {
    let low = 0;
    let high = arr.length - 1

    while(low < high) {
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        low++;
        high--;
    }

    return arr;
}

console.log(arr)