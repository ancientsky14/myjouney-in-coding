// 1️⃣ Create the lunches array
let lunches = [];

// 2️⃣ Add lunch to the end of the array
function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

// 3️⃣ Add lunch to the start of the array
function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

// 4️⃣ Remove the last lunch item
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = arr.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  }
  return arr;
}

// 5️⃣ Remove the first lunch item
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = arr.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  }
  return arr;
}

// 6️⃣ Get a random lunch item
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
  }
}

// 7️⃣ Show the lunch menu
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
}
addLunchToEnd(lunches, "Tacos");
addLunchToStart(lunches, "Pizza");
addLunchToEnd(lunches, "Burger");
showLunchMenu(lunches);
getRandomLunch(lunches);
removeLastLunch(lunches);
removeFirstLunch(lunches);
showLunchMenu(lunches);
