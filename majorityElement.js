let arr = [3,8,4,8,8]
let n = arr.length;

let majorityElement = (arr, n) => {
    for(let i = 0; i < n; i++) {
        let count = 1;
        for(let j = 0; j < n; j++) {
            if(arr[i] === arr[j]) {
                count++
            }
        }
        if(count > n/2) {
            return i;
        }
    }
    return -1;
}

console.log(majorityElement(arr, n))