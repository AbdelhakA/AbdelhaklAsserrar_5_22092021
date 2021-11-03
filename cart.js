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
              _imageUrl: item.imageUrl,
                _name: item.name,
                _price: parseInt(item.price),
                _quantity: parseInt(wayoutJson._quantity),
        
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