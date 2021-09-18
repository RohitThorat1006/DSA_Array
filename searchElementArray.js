let array = [1,2,3,4,5];
let searchVal = 9;

//METHOD 1 USING FOR OF LOOP
let UsingForOf = (array, searchVal) => {
    for (let [index, eachVal] of array.entries()) {
        if(eachVal == searchVal) {
            return index;
        }
    }
    return -1
}

//METHOD 2 LINEAR SEARCH
let LinearSearch = (array, searchVal) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] == searchVal) {
            return i;
        }
    }
    return -1;
}

console.log(LinearSearch(array, searchVal))