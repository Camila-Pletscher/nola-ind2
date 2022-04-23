import { agregarAlCarrito } from "./agregarAlCarrito.js";
import { productos } from "./stock.js";

const crearListaDeProductos = (productos) => {
  const tarjeta = document.getElementById("tarjeta");
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.classList.add("col-4");
    div.classList.add("p-3");
    div.innerHTML += `
                      <img src="${producto.img}" class="card-img-top" alt="" />
                      <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">Some</p>    
                      <a class="btn btn-primary" id=btnAgregar${producto.codigo}>Agregar al carrito</a>
                      </div>`;
    tarjeta.appendChild(div);
    
    // console.log(producto.codigo);
    const btnAgregar = document.getElementById(`btnAgregar${producto.codigo}`);
    // console.log(btnAgregar);
    btnAgregar.addEventListener("click", () => {
      agregarAlCarrito(producto.codigo);
    });
  });
};

crearListaDeProductos(productos);

