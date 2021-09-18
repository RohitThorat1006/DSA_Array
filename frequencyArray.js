let arr = [10,10,10,25,30,30]
let n = arr.length

let frequencyArray = (arr,n) => {
    let obj = {};

    for(let eachArr of arr) {
        if(obj[eachArr]) {
            obj[eachArr] = obj[eachArr] + 1
        } else {
            obj[eachArr]  = 1
        }
    }

    return obj
}

let res = frequencyArray(arr, n)

for(let i in res) {
    console.log(i, res[i])
}