function uniteUnique(...arrays) {
    const result = [];

    for (let arr of arrays) {
        for (let value of arr) {
            if (!result.includes(value)) {
                result.push(value);
            }
        }
    }

    return result;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// → [1, 3, 2, 5, 4]
