(async function () {
    displayCart();
})()

async function displayCart () {
  var taille = localStorage.length
  let displayTab = [];

  if(taille != 0) {
      for (var i = 0; i < localStorage.length; i++) {
          let access = localStorage.access(i);
          let wayOut = localStorage.getItem(access);
          let wayoutJson = JSON.parse(wayOut);
          let itemLink = "http://localhost:3000/api/products/" + wayoutJson._id;
          const item = await getProducts(itemLink);
          let product = {
              _id: item._id,
              imageUrl: item.imageUrl,
                name: item.name,
                price: parseInt(item.price),
                quantité: parseInt(wayoutJson._quantity),
        
          }
          console.log(product)  
          displayTab[i] = product;
          displayProduct(displayTab[i], wayoutJson._color, access)
          if(i == localStorage.length - 1) {
              removeItem()
              quantityPrice()
              changes()
              checkoutContact()
          }
      }
  }
  else {
      alert("Le panier est vide." )
      return (0);
  }
}

function displayProduct(article, color, id) {

    document.getElementById('cart__item').innerHTML += 
    `<article class="cart__item" data-id="${id}">
    <div class="cart__item__img">
      <img src="${item.imageUrl}" alt="Photographie d'un canapé">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__titlePrice">
        <h2>${item.name}</h2>
        <h2>${color}</h2>
        <p>${item.price}</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem" id="${id}">Supprimer</p>
        </div>
      </div>
    </div>
  </article>`
}

function erase() {
    var elements = document.getElementsByClassName("deleteItem");

    var maFonction = function() {
        var attribute = this.getAttribute("id");
        var parentElement = ":" + attribute
        var element = document.getElementById(parentElement);
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        document.getElementById(parentElement).remove();
        localStorage.removeItem(attribute);
        quantityPrice();
    };

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', maFonction, false); 
    }
}

async function quantityPrice() {
    var quantity = 0
    var money = 0
    for (var i = 0; i < localStorage.length; i++) {
        let access = localStorage.access(i);
        let wayOut = localStorage.getItem(access);
        let wayoutJson = JSON.parse(wayOut);
        let quantityNb = parseInt(wayoutJson.quantité);
        let itemLink = "http://localhost:3000/api/products/" + wayoutJson._id;
        const item = await getProducts(itemLink);
        console.log(item)
        quantity += quantityNb;
        money += item.price * quantityNb;
    }
    var total = document.getElementById('totalQuantity').innerHTML;
    if (total !="") {
        
    }
}