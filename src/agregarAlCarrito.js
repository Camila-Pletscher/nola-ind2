import { productos } from "./stock.js";

let carritoDePedido = [];

//Valido si en el storage hay algo y sino le asigno un array vacio
carritoDePedido = JSON.parse(localStorage.getItem("productosAgregados")) ?? [];

console.log(carritoDePedido);

class Producto {
  constructor(codigo, nombre, precio, img, stock, cantidad) {
    this.codigo = codigo
    this.nombre = nombre
    this.precio = precio
    this.img = img
    this.stock = stock
    this.cantidad = cantidad
  }
}


export const agregarAlCarrito = (productoCodigo) => {
  
  const encontrarProductos = () => {
    //Busca el producto entre el stock
    let producto = productos.find(
      (producto) => producto.codigo == productoCodigo
    );
    //Busco si esta repetido 
    let productoRepetido = carritoDePedido.find((producto) => producto.codigo == productoCodigo);
    
    if (sumarProductoRepetido(productoRepetido) && (productoRepetido = producto)) {
      producto.cantidad = 1;
    }
    //Ejecuto fx para ver sumar si esta repetido o eliminar
    

    let codigo = producto.codigo;
    let nombre = producto.nombre;
    let precio = producto.precio;
    let img = producto.img;
    let stock = producto.stock;
    let cantidad = producto.cantidad;
    //Instancio y creo un nuevo objeto con esos datos
    producto = new Producto(codigo, nombre, precio, img, stock, cantidad);
    //Lo agrego al carrito
    carritoDePedido.push(producto);
    
    console.log(carritoDePedido);
    //Lo guardo en el storage
    localStorage.setItem("productosAgregados", JSON.stringify(carritoDePedido));
    
    //Agrego el producto al modal del carrito
    agregarProductoAlModal(producto);
  
  };

  encontrarProductos();
};

function sumarProductoRepetido (prodRepetido) {
  if (prodRepetido) {
    carritoDePedido = carritoDePedido.filter(item => item.codigo != prodRepetido.codigo);
    console.log(carritoDePedido);
    prodRepetido.cantidad++
    carritoDePedido.push(prodRepetido);
    localStorage.setItem("productosAgregados", JSON.stringify(carritoDePedido));
    console.log(prodRepetido.cantidad);
    document.getElementById(`cantidad${prodRepetido.codigo}`).innerHTML = `<p id="cantidad${prodRepetido.codigo}">Cantidad: ${prodRepetido.cantidad}</p>`;
    
    return prodRepetido;
    }
}

function agregarProductoAlModal() {
  let modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = "";
  carritoDePedido.forEach(producto => {
    let div = document.createElement("div");
    div.innerHTML = `<p>${producto.nombre}</p>
                            <p>Precio: ${producto.precio}</p>
                            <p id="cantidad${producto.codigo}">Cantidad: ${producto.cantidad}</p>
                            `;

    const botonBorrar = document.createElement("button");
    botonBorrar.innerHTML += `<i class="small material-icons">delete</i>`
    botonBorrar.addEventListener('click', () => {
      eliminarProductoDelCarrito(producto);


    })
    div.appendChild(botonBorrar);

    modalBody.appendChild(div);


  })


};

function eliminarProductoDelCarrito(producto) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      carritoDePedido = carritoDePedido.filter(item => item.codigo != producto.codigo);
      localStorage.setItem("productosAgregados", JSON.stringify(carritoDePedido));
      agregarProductoAlModal();
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}


