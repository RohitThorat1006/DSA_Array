let arr = [2,3,10,6,4,8,1];
let n = arr.length

let maxDiff = (arr, n) => {
    let res = arr[1] - arr[0]
    let minVal = arr[0]

    for(let j = 1; j < n; j++) {
        res = Math.max(res, arr[j] - minVal);
        minVal = Math.min(minVal, arr[j]);
    }
    return res;
}

console.log(maxDiff(arr, n))