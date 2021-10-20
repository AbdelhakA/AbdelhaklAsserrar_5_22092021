fetch("http://localhost:3000/api/products")
    .then(res => res.json())
    .then(data => console.log(data));
  
  
  for (product of products) {

    let productId = product._id; 
    let price = document.getElementById('price');
    let description = document.getElementById('description');
    let productPicLink = product.imageUrl
    let image = document.getElementById('item_pic');
    let colors = product.colors;
    let colorPlace = document.createElement('option');
    console.log(colorPlace);
    let colorOption = document.getElementById('item_color');
    
    
    
    

    if (id === productId) {

      for (var i = 0 ; i < colors.length ; i++) {
        colorOption.value = colors[i];
        colorOption.innerText = colors[i];
        
        
      }

      for (var i = 0 ; i < colors.length ; i++) {
        colorPlace.value = colors[i];
        colorPlace.innerText = colors;
        
        
      }

      // for (let option; option < colors.length; option++) {
      //   colorPlace.value = colors[i];
      //   colorPlace.innerText = colors[i];
      //   console.log(colorPlace);
      // }




      
      price.innerHTML = product.price;
      description.innerHTML = product.description;
      image.setAttribute('src', '../images/' + productPicLink);
    }
    
}    