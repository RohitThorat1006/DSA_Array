let arr = [1,2,3,4];

let isSorted = (arr) => {
    for(let [i,v] of arr.entries()) {
        if(arr[i] > arr[i+1]){
            return false
        }
    }
    return true
}

console.log(isSorted(arr))