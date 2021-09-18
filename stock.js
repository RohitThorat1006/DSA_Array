let arr = [1,5,3,8,12];
let n = arr.length

let maxProfit = (arr, n) => {
    let profit = 0;
    for(let i = 1; i < n; i++) {
        if(arr[i] > arr[i-1]) {
            profit += (arr[i] - arr[i-1])
        }
    }

    return profit
}

console.log(maxProfit(arr, n))