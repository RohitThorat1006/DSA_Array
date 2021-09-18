let arr = [7,10,4,10,6,5,2]
let n = arr.length;

let leaderInArray = (arr, n) => {
    let currLeader = arr[n-1];
    console.log(currLeader)
    for(let i = n-2 ; i >= 0; i--) {
        if(currLeader < arr[i]) {
            currLeader = arr[i]
            console.log(currLeader)
        }
    }
}

console.log(leaderInArray(arr, n))