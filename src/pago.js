let carrito = JSON.parse(localStorage.getItem("productosAgregados"));
console.log(carrito);

function finalizarCompra() {
    let listaProductos = document.querySelector(".collection");
    listaProductos.innerHTML = "";

    carrito.forEach(producto => {
        let li = document.createElement("li");
        li.classList.add("collection-item");
        li.classList.add("avatar");
        li.innerHTML = `<img src="${producto.img}" alt="" class="circle">
        <span class="title">${producto.nombre}</span>
        <p>${producto.precio} <br>
           Cantidad: ${producto.cantidad}
        </p>`;

        listaProductos.appendChild(li);
    })
}

finalizarCompra();