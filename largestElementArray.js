let arr = [1,2,3,4,5]

//METHOD 1
let largestNum = Math.max(...arr)
console.log(largestNum)


// METHOD 2
let largestElem = (arr) => {
    let largest = arr[0];
    for(let eachArr of arr) {
        if(eachArr > largest) {
            largest = eachArr
        }
    }
    return largest
}

