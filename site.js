class Product {
  constructor(name, image, altText, description, price) {
    this.name = name;
    this.image = image;
    this.altText = altText;
    this.description = description;
    this.price = price;
  }
}

const product1 = {
  name: "Baguette",
  image: "pexels-pixabay-461060.jpg",
  altText: "Bakelse",
  description: "Innehåller mjöl.",
  price: 20000,
};

const product2 = {
  name: "Bröd",
  image: "pexels-magda-ehlers-1586947.jpg",
  altText: "Bröd",
  description: "Innehåller också mjöl.",
  price: 40000,
};

const product3 = {
  name: "Tårta",
  image: "pexels-marta-dzedyshko-2067436.jpg",
  altText: "Tårta",
  description: "Innehåller grädde.",
  price: 60000,
};

const cardList = document.getElementById("cardList");
const cartList = document.getElementById("cartList");
const finishOrderModal = document.getElementById("finishOrderModal");
const products = [product1, product2, product3, product1, product2, product3];
const cart = [product1, product2, product2];

showProducts();
showCart();
finishOrderModal.onclick = () => {
  finishOrder();
};

function showProducts() {
  for (const product of products) {
    const card = document.createElement("div");
    const cardImage = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const cardPrice = document.createElement("p");
    const cardFooter = document.createElement("div");
    const readMoreButton = document.createElement("button");
    const addToCartButton = document.createElement("button");

    card.classList.add("card", "p-0");
    cardImage.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    cardPrice.classList.add("card-text");
    cardFooter.classList.add("card-footer", "p-1", "pt-0");
    readMoreButton.classList.add("btn", "btn-light", "m-1");
    addToCartButton.classList.add("btn", "btn-light", "m-1");

    cardImage.src = product.image;
    cardImage.alt = product.altText;
    cardTitle.innerText = product.name;
    cardPrice.innerText = `${product.price} kr`;
    readMoreButton.innerText = "Läs mer";
    addToCartButton.innerText = "Lägg till";

    readMoreButton.onclick = () => {
      readMore(product);
    };
    addToCartButton.onclick = () => {
      addToCart(product);
    };

    cardFooter.append(readMoreButton, addToCartButton);
    cardBody.append(cardTitle, cardPrice);
    card.append(cardImage, cardBody, cardFooter); //cardImage
    cardList.append(card);
  }
}

function showCart() {
  let price = 0;
  for (const product of cart) {
    const cartItem = document.createElement("li");
    const row = document.createElement("div");
    const productName = document.createElement("p");
    const removeFromCartButton = document.createElement("button");

    row.classList.add("row", "align-items-center");
    productName.classList.add("col");
    removeFromCartButton.classList.add(
      "btn",
      "btn-sm",
      "btn-light",
      "col-auto"
    );

    removeFromCartButton.innerText = "Ta bort";
    productName.innerText = product.name;

    removeFromCartButton.onclick = () => {
      removeFromCart(product);
    };

    row.append(productName, removeFromCartButton);
    cartItem.append(row);
    cartList.append(cartItem);

    price += product.price;
  }
  const priceTotal = document.getElementById("priceTotal");
  priceTotal.innerText = `Totalt pris: ${price} kr`;
}

function readMore(product) {
  const modal = document.getElementById("productInformationModal");
  const closeButton = document.getElementById("closeModal");
  const productName = document.getElementById("productName");
  const productInfo = document.getElementById("productInfo");

  productName.innerText = product.name;
  productInfo.innerText = product.description;

  modal.style.display = "block";
  closeButton.onclick = () => {
    modal.style.display = "none";
  };
}

function addToCart(product) {
  cart.push(product);
  while (cartList.childElementCount > 0) {
    cartList.children[0].remove();
  }
  showCart();
}

function removeFromCart(product) {
  const index = cart.indexOf(product);
  cart.splice(index, 1);
  while (cartList.childElementCount > 0) {
    cartList.children[0].remove();
  }
  showCart();
}

function finishOrder() {
  while (cartList.childElementCount > 0) {
    cartList.children[0].remove();
  }
  cart.length = 0;
  showCart();
}
