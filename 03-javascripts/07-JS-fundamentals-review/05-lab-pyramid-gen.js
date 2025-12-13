function pyramid(char, height, inverted) {
    let result = "\n";

    for (let i = 0; i < height; i++) {
        let spaces;
        let chars;

        if (!inverted) {
            spaces = height - i - 1;
            chars = 2 * i + 1;
        } else {
            spaces = i;
            chars = 2 * (height - i) - 1;
        }

        result += " ".repeat(spaces) + char.repeat(chars) + "\n";
    }

    return result;
}
console.log(pyramid("i", 10, false));
console.log(pyramid("z", 20, true));
