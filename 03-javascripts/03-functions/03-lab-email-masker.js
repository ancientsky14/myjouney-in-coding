function maskEmail(email) {
  // split into username + domain
    const atIndex = email.indexOf("@");
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);

    // first and last characters stay
    const firstChar = username[0];
    const lastChar = username[username.length - 1];

    // middle becomes stars
    const mask = "*".repeat(username.length - 2);

    return firstChar + mask + lastChar + domain;
}

// required variable outside the function
let email = "janluigirivera@gmail.com";


// required console output
console.log(maskEmail(email));

email = "codeerror011496@gmail.com"
console.log(maskEmail(email));

email = "ancientsky09@gmail.com"
console.log(maskEmail(email));
email = "ancientsky95@gmail.com"
console.log(maskEmail(email));
email = "janluigi.affiliates@gmail.com"
console.log(maskEmail(email));
