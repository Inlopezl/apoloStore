window.addEventListener('load',async()=>{


    let url = 'http://localhost:3031/api/productos'
    let apiResult = await fetch(url)
    let countries = await apiResult.json()
    let column = document.querySelector(`div.row-cols-1`);
    
    countries.forEach(product => {
    
    column.innerHTML+=
    `    
    <div class="col mb-4">
        <div class="card" style="width: 18rem;">
            
            <div class="card-body">
                <h5  class="card-title">${product.name}</h5>
                    <p class="card-text">

                    </p>
        
            </div>
        </div>
    </div>
    `;});
})

