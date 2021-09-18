let arr = [5, -2, 3, 4];
let n = arr.length;

let maxCircularSubArray = (arr, n) => {
    let res = arr[0];
    for(let i = 0; i < n; i++) {
        let curr_max = arr[i];
        let curr_sum = arr[i];
        for(let j = 1; j < n; j++) {
            let index = (i + j) % n;
            curr_sum += arr[index]
            curr_max = Math.max(curr_max, curr_sum)
        }
        res = Math.max(curr_max, res)
    }
    return res
};

console.log(maxCircularSubArray(arr, n))


