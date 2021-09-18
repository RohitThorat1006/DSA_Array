let arr = [1,1,2,2];

//METHOD 1 - filter
let removeDuplicates = (arr) => {
    return arr.filter((value, index) => {
        return arr.indexOf(value) === index
    })
}

// METHOD 3 - Set
let removeDuplicatesUsingSet = (arr) => {
    return [...new Set(arr)]
}

// let removeDuplicatesInOneForLoop = (arr) => {
//     let res = 1;
//     for(let i = 1; i < arr.length; i++) {
//         console.log(arr[i], arr[res-1])
//         console.log('res', res)
//         if(arr[i] != arr[res-1]) {
//             arr[res] = arr[i]
//             res++;
//         }
//     }
//     return arr
// }
console.log(removeDuplicatesInOneForLoop(arr))