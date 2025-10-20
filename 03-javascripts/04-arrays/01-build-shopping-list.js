console.log("Grocery Shopping List");

const shoppingList = [];

// Add the first item
console.log("It will be nice to have some fruit to eat.");
shoppingList.push("Apples");

// Function to display current shopping list
function getShoppingListMsg(list) {
  return `Current Shopping List: ${list.join(", ")}`;
}

console.log(getShoppingListMsg(shoppingList));

// Add more items
shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

// Add several snack items
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

// Remove the last item
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

// Add dessert
console.log("It might be nice to get a dessert.");
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

// Reconsider choices
console.log("On second thought, maybe we should be more health conscious.");
shoppingList.shift();

// Replace Vegetable Oil with Canola Oil
shoppingList[0] = "Canola Oil";
console.log(getShoppingListMsg(shoppingList));
