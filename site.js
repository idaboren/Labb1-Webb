class Product {
  constructor(name, image, altText, description, price) {
    this.name = name;
    this.image = image;
    this.altText = altText;
    this.description = description;
    this.price = price;
  }
}

let product1 = new Product("Bakelse", "Innehåller mjöl", 20000);
product1 = {
  name: "Bakelse",
  image: "400.jpg",
  altText: "Bakelse",
  description: "Innehåller mjöl.",
  price: 20000,
};

const product2 = {
  name: "Bröd",
  image: "400.jpg",
  altText: "Bröd",
  description: "Innehåller också mjöl.",
  price: 40000,
};

const product3 = {
  name: "Tårta",
  image: "400.jpg",
  altText: "Tårta",
  description: "Innehåller grädde.",
  price: 60000,
};

const products = [product1, product2, product3];
const cart = [product1, product2, product2];

showProducts();
showCart();

function showProducts() {
  for (const product of products) {
    const card = document.createElement("div");
    const cardImage = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const cardFooter = document.createElement("div");
    const readMoreButton = document.createElement("button");
    const addToCartButton = document.createElement("button");

    cardImage.src = product.image;
    cardImage.alt = product.altText;
    card.classList.add("card", "p-0");
    cardImage.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    cardFooter.classList.add(
      "card-footer",
      "bg-white",
      "border-0",
      "p-1",
      "pt-0",
      "text-center"
    );
    readMoreButton.classList.add("btn", "btn-light", "m-1");
    addToCartButton.classList.add("btn", "btn-light", "m-1");

    //cardImage
    cardTitle.innerText = product.name;
    readMoreButton.innerText = "Läs mer";
    addToCartButton.innerText = "Lägg till";

    readMoreButton.onClick = () => {}; // open modal
    addToCartButton.onClick = () => {
      addToCart(product);
    };

    const cardList = document.querySelector("#cardList");
    cardFooter.append(readMoreButton, addToCartButton);
    cardBody.append(cardTitle);
    card.append(cardImage, cardBody, cardFooter); //cardImage
    cardList.append(card);
  }
}

function showCart() {
  for (const product of cart) {
    const cartItem = document.createElement("li");
    const row = document.createElement("div");
    const productName = document.createElement("p");
    const removeFromCartButton = document.createElement("button");

    row.classList.add("row");
    productName.classList.add("col");
    removeFromCartButton.classList.add("btn", "btn-close", "col-end");

    //removeFromCartButton.innerText = "Ta bort";
    productName.innerText = product.name;

    removeFromCartButton.onClick = (product) => {
      removeFromCart(product);
    };

    row.append(productName, removeFromCartButton);
    cartItem.append(row);
    const cartList = document.querySelector("#cartList");
    cartList.append(cartItem);
  }
}

function readMore() {
  //....
}

function addToCart(product) {
  cart.push(product);
  showCart();
}

function removeFromCart(product) {
  const index = cart.indexOf(product);
  cart.splice(index, 1);
  showCart();
}
