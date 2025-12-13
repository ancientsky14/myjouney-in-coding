const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

// Random number between 1 and 5
const randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune;

if (randomNumber === 1) {
    selectedFotune = fortune1;
} else if (randomNumber === 2) {
    selectedFotune = fortune2;
} else if (randomNumber === 3) {
    selectedFotune = fortune3;
} else if (randomNumber === 4) {
    selectedFotune = fortune4;
} else if (randomNumber === 5) {
    selectedFotune = fortune5;
}

console.log(selectedFotune);