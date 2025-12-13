function frankenSplice(arr1, arr2, n) {
    // Make a copy of arr2 so we don’t mutate it
    let result = arr2.slice();

    // Insert elements of arr1 into the copy at index n
    result.splice(n, 0, ...arr1);

    return result;
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
// [4, 1, 2, 3, 5]

console.log(frankenSplice([1, 2], ["a", "b"], 1));
// ["a", 1, 2, "b"]

console.log(
  frankenSplice(
    ["claw", "tentacle"],
    ["head", "shoulders", "knees", "toes"],
    2
  )
);
// ["head", "shoulders", "claw", "tentacle", "knees", "toes"]

console.log(frankenSplice([1, 2, 3, 4], [], 0));
// [1, 2, 3, 4]
