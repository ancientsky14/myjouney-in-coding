function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
// [7, "ate", 9]

bouncer(["a", "b", "c"]);
// ["a", "b", "c"]

bouncer([false, null, 0, NaN, undefined, ""]);
// []

bouncer([null, NaN, 1, 2, undefined]);
// [1, 2]

bouncer([]);
// []
