let arr = [5,10,20,6,3,8];
let n = arr.length;

let maxlength = (arr, n) => {
    let res = 1;
    for(let i = 0; i < n; i++) {
        let curr = 1;
        for(let j = i; j < n; j++) {
            if(
                (arr[j] % 2 == 0 && arr[j-1] % 2 != 0) ||
                (arr[j] % 2 != 0 && arr[j-1] % 2 == 0)
            ) {
                curr++;
            } else {
                break;
            }
        }
        res = Math.max(res, curr)
    }
    return res
}

let maxlengthEfficient = (arr, n) => {
    let res = 1;
    let curr = 1;
    for (let j = 0; j < n; j++) {
        if (
            (arr[j] % 2 == 0 && arr[j - 1] % 2 != 0) ||
            (arr[j] % 2 != 0 && arr[j - 1] % 2 == 0)
        ) {
            curr++;
            res = Math.max(res, curr)
        } else {
            curr = 1;
        }
    }
    return res
}

console.log(maxlengthEfficient(arr, n))