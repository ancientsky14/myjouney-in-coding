function largestOfAll(arrays){
    let largestNumbers = [];
    for (let i = 0; i <arrays.length; i++){
        let subArray = arrays[i];
        let max = subArray[0];

        for (let j = 1;  j < subArray.length; j++){
            if (subArray[j] > max) {
                max = subArray[j];
            }
        }
        largestNumbers.push(max);
    }
    return largestNumbers;
}

// Test examples
console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); 
// [5, 27, 39, 1001]

console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); 
// [27, 5, 39, 1001]

console.log(largestOfAll([[50, 200, 150, 100], [300,200, 400,500], [600, 700, 900, 800], [900, 1000, 1200, 1300]]));