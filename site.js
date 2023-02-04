class Product {
  constructor(name, image, description, price) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
  }
}

const products = [];
const cart = [];

function showProducts() {
  for (product in products) {
    //....
  }
}

function showCart() {
  for (product in cart) {
    //....
  }
}

function addToCart() {
  //....
}

function removeFromCart() {
  //....
}
