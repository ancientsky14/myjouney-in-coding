// 1. Password generator function
function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

// 2. Generate a password of desired length
let password = generatePassword(12); // example: 12-character password

// 3. Log the generated password
console.log("Generated password: " + password);
