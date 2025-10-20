// 1️⃣ Declare a variable num and assign a number between 1 and 20
let num = 7;

// 2️⃣ Create a function named factorialCalculator
function factorialCalculator(number) {
  // Initialize result variable
  let result = 1;

  // 3️⃣ Use a loop to calculate the factorial
  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  // Return the factorial result
  return result;
}

// 4️⃣ Call the factorialCalculator with num as the argument
let factorial = factorialCalculator(num);

// 5️⃣ Create the result message in the required format
let resultMsg = `Factorial of ${num} is ${factorial}`;

// 6️⃣ Output the result to the console
console.log(resultMsg);
