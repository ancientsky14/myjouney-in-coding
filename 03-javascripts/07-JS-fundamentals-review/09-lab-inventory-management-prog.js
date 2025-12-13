// 1. Empty inventory array
let inventory = [];

// 2. Find product index
function findProductIndex(productName) {
    const name = productName.toLowerCase();
    return inventory.findIndex(item => item.name === name);
}

// 3. Add product
function addProduct(product) {
    const name = product.name.toLowerCase();
    const index = findProductIndex(name);

    if (index !== -1) {
        inventory[index].quantity += product.quantity;
        console.log(name + " quantity updated");
    } else {
        inventory.push({
            name: name,
            quantity: product.quantity
        });
        console.log(name + " added to inventory");
    }
}

// 4. Remove product
function removeProduct(productName, quantity) {
    const name = productName.toLowerCase();
    const index = findProductIndex(name);

    if (index === -1) {
        console.log(name + " not found");
        return;
    }

    const product = inventory[index];

    if (product.quantity < quantity) {
        console.log(
            "Not enough " + name + " available, remaining pieces: " + product.quantity
        );
        return;
    }

    product.quantity -= quantity;

    if (product.quantity === 0) {
        inventory.splice(index, 1);
    }

    console.log(
        "Remaining " + name + " pieces: " + product.quantity
    );
}

addProduct({ name: "FLOUR", quantity: 20 });
// flour added to inventory

addProduct({ name: "FLOUR", quantity: 5 });
// flour quantity updated

removeProduct("FLOUR", 5);
// Remaining flour pieces: 20

removeProduct("FLOUR", 25);
// Not enough flour available, remaining pieces: 20
