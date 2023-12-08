window.addEventListener('load',async()=>{


    let url = '/api/productos';
    let apiResult = await fetch(url);
    let products = await apiResult.json();
    let column = document.querySelector('div.row-cols-1');
    console.log(products);
    
    // Bandera para indicar si se encontró un producto con category_id igual a 1

    
    products.forEach(product => {
      // Verifica si el producto tiene category_id igual a 1
      if (product.category_id === 2) {

        column.innerHTML +=
          `
          <div class="card" style="width: 18rem;">
            <img src="/img/${product.img}" class="card-img-top" alt="Remera ${product.name}">
            <div class="card-body">
              <p class="card-text">${product.name} Sale ${product.price} </br> ${product.description}</p>
            </div>
          </div>
          `;
      }
    
      // Si no se ha encontrado un producto con category_id igual a 1, continúa al siguiente producto

    });
    
    
      // Si llega aquí, es porque ya se encontró un producto con category_id igual a 2
  });  