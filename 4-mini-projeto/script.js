window.onload = function() {
  // alert("carregou");
  showProducts();

};

function getProducts(){
  return data["items"];
}

function showProducts(){
  let productDiv = document.getElementById("products");
  productDiv.innerHTML = `
    ${getProducts().map((produto) => `
      <div class="product">
        <img src="${produto["product"]["images"][0]}" class="product-img" />
        <div class="text-name">
          <h3 class="product-name">${produto["product"]["name"]}</h3>
        </div>
        <div class="text-price">
          <p class="product-price">${Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
        </div>
      </div>
      `).join("")}
  `
}