(async function () {
    const items = await getItems()
    
    for (item of items) {
       displayItem(item)
       
    }
   const colors = item.colors;
   
    
   for (color of colors) {
    displayColor(color)
   }
  })()
  
  function getItems() {
    return fetch("http://localhost:3000/api/products")
        .then(function (httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function (items) {
            return items;
        })
        .catch(function (error) {
            alert(error)
        })
  }
  
  function displayItem(item) { 
    let productId = item._id; 
    let str = window.location.href;
    let url = new URL(str); 
    let id  = url.searchParams.get("id"); 
    
    
  if (productId === id) {


    document.getElementById("productItem").innerHTML += `
    <article>
    <div class="item__img" >
              <img id="item_pic" src="${item.imageUrl}" alt="">
            </div>
            <div class="item__content">

              <div class="item__content__titlePrice">
                <h1 id="title"><!-- Nom du produit --></h1>
                <p>Prix : <span id="price">${item.price}</span>€</p>
              </div>

              <div class="item__content__description">
                <p class="item__content__description__title">Description :</p>
                <p id="description">${item.description}</p>
              </div>

              <div class="item__content__settings">
                <div class="item__content__settings__color">
                  <label for="color-select">Choisir une couleur :</label>
                  <select name="color-select" id="colors">
                      <option>choisissez une couleur</option>
                     
                      
                  </select>
                </div>

                <div class="item__content__settings__quantity">
                  <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
                  <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
                </div>
                <div class="item__content__addButton">
            <button id="addToCart">Ajouter au panier</button>
        </div>

              </div>
              </article>`
      
  }

  
}    

function displayColor(color) {  
  document.getElementById("colors").innerHTML += `
      <option value="${color}">${color}</option>
  `
}
