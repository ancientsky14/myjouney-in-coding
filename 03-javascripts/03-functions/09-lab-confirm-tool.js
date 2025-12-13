function confirmEnding (str, target){
    return str.substring(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));                      // true
console.log(confirmEnding("Congratulation", "on"));             // true
console.log(confirmEnding("Connor", "n"));                      // false
console.log(confirmEnding("He has to give me a new name", "name")); // true
console.log(confirmEnding("Open sesame", "same"));              // true
console.log(confirmEnding("Open sesame", "sage"));              // false
console.log(confirmEnding("Abstraction", "action"));            // true
