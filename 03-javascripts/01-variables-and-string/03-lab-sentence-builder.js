// Word banks
const adjectives = ["brave", "tiny", "mysterious", "silly", "glowing", "sleepy"];
const nouns = ["dragon", "unicorn", "robot", "wizard", "hamster", "alien"];
const verbs = ["dancing", "sleeping", "eating", "laughing", "sneezing", "floating"];
const places = ["enchanted forest", "mountain cave", "space station", "hidden temple", "cloud kingdom", "ocean palace"];
const adjectives2 = ["sparkly", "fiery", "icy", "electric", "dusty", "magical"];
const nouns2 = ["cupcakes", "marshmallows", "pizza slices", "galactic berries", "enchanted noodles", "moon cookies"];

// Random selector helper
function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to build a random story using the template
function createStory() {
    let adjective = randomPick(adjectives);
    let noun = randomPick(nouns);
    let verb = randomPick(verbs);
    let place = randomPick(places);
    let adj2 = randomPick(adjectives2);
    let nounTwo = randomPick(nouns2);

    return `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${nounTwo}. The ${noun} lived in a ${place} and had ${adj2} nostrils that blew fire when it was ${verb}.`;
}

// Generate two random stories
let firstStory = createStory();
let secondStory = createStory();

console.log("First story:", firstStory);
console.log("Second story:", secondStory);

