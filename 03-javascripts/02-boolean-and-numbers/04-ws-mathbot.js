const botName = "MathBot";

// Intro
console.log(`Hi there! My name is ${botName} and I am here to teach you about the Math object!\n`);

// Math.random()
console.log("The Math.random() method returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).");
const randomNum = Math.random();
console.log("Random number:", randomNum, "\n");

// Random number between two values
console.log("Now, let's generate a random number between two values.");
const min = 1;
const max = 100;
const randomNum2 = Math.random() * (max - min) + min;
console.log(`Random number between ${min} and ${max}:`, randomNum2, "\n");

// Math.floor()
console.log("The Math.floor() method rounds a value down to the nearest whole integer.");
const numRoundedDown = Math.floor(6.7);
console.log("Number 6.7 Rounded down:", numRoundedDown, "\n");

// Math.ceil()
console.log("The Math.ceil() method rounds a value up to the nearest whole integer.");
const numRoundedUp = Math.ceil(3.2);
console.log("Number 3.2 Rounded up:", numRoundedUp, "\n");

// Math.round()
console.log("The Math.round() method rounds the value to the nearest whole integer.");
console.log("Number 2.7 Rounded value:", Math.round(2.7),"\nNumber 11.2 Rounded value:",  Math.round(11.2), "\n");

// Math.max() and Math.min()
console.log("Math.max() and Math.min() return the highest and lowest numbers in a list.");
console.log("3, 125, 55, 24")
console.log("Max value:", Math.max(3, 125, 55, 24));
console.log("6, 90, 14, 90, 2")
console.log("Min value:", Math.min(6, 90, 14, 90, 2), "\n");

console.log("It was fun learning about the different Math methods with you!");
