let arr = [1,2,3,4,5]

//METHOD 1
let largestNum = Math.max(...arr)
arr.splice(arr.indexOf(largestNum), 1);
let secondLargest = Math.max(...arr);
// console.log(secondLargest)

//METHOD 2
let secondLargestFun = (arr) => {
    let largest = 0
    let secondLar = 0
    for(let eachArr of arr) {
        if(eachArr  > largest) {
            secondLar = largest
            largest = eachArr
        } else if(eachArr > secondLar) {
            secondLar = eachArr
        }
    }
    return secondLar;
}

console.log(secondLargestFun(arr))