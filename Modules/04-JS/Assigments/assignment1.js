// Given an array of integers, find the sum of all integers. 
// You can be assure that the array will only contain integers (both positive and negative).
// sum([1, 2, 3, 4]) // output: 10
// sum([-3, 5, 19, -6]) // output: 15

function sum(numbersArray) {
    let arrLength = numbersArray.length;
    let total = 0;
    for (let i=0; i<arrLength; i++) {
        // total += numbersArray[i];
        total = total + numbersArray[i];
    }

    return total;
}

console.log(sum([1, 2, 3, 4]))
console.log(sum([-3, 5, 19, -6]))