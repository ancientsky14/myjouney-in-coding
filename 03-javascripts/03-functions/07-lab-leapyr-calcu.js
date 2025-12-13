
function isLeapYear(num) {
    if (num % 400 === 0) {
        return num + " is a leap year.";
    } else if (num % 100 === 0 ){
        return num + " is not a leap year."
    } else if (num % 4 === 0 ){
        return num + " is a leap year. "
    } else {
        return num + " is not a leap year."
    }
}

let year;

// Test 2024
year = 2024;
let result = isLeapYear(year);
console.log(result);

// Test 2000
year = 2000;
result = isLeapYear(year);
console.log(result);

// Test 1900
year = 1900;
result = isLeapYear(year);
console.log(result);

year = 2028;
result = isLeapYear(year);
console.log(result);