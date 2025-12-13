function calculateSum(num1, num2) {
    return num1 + num2
}
console.log(calculateSum(2, 5)); //7
console.log(calculateSum(10, 10)); //20
console.log(calculateSum(5, 5)); //10

function calculateDifference (num1, num2) {
    return num1 - num2
}
console.log(calculateDifference(22, 5)); //17
console.log(calculateDifference(12, 1)); //11
console.log(calculateDifference(17, 9)); //8

function calculateProduct(num1, num2) {
    return num1 * num2
}
console.log(calculateProduct(13, 5)); //65

function calculateQuotient(num1, num2) {
    return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}
console.log(calculateQuotient(7, 11)); //0.6363636363636364
console.log(calculateQuotient(3, 0)); //Error: Division by zero

function calculateSquare(num) {
    return Math.pow(num, 2)
}
console.log(calculateSquare(2)); //4
console.log(calculateSquare(9)); //81

function calculateSquareRoot(num){
    return Math.sqrt(num)
}
console.log(calculateSquareRoot(25)); //5
console.log(calculateSquareRoot(100)); //25