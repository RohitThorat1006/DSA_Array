let arr = [1,-2,3,-1,2];
let n = arr.length;

let maxSumNaive = (arr, n) => {
    let res = arr[0];
    for(let i = 0; i < n; i ++) {
        let curr = 0
        for(let j = i; j < n; j++) {
            curr = curr + arr[j]
            res = Math.max(res, curr)
        }
    }
    return res
}

let maxSumEfficient = (arr, n) => {
    let res = arr[0]
    let maxEnding = arr[0];
    for(let i = 1; i < n; i++) {
        maxEnding = Math.max(maxEnding + arr[i], arr[i]);
        res = Math.max(res, maxEnding)
    }
    return res;
}

console.log(maxSumEfficient(arr, n))