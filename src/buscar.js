import { getData } from "./getData.js";
const productos = await getData();

console.log(productos);

let search = document.getElementById("search");

search.addEventListener('click', buscar);

function buscar() {
    let busqueda = search.value.toUpperCase();
    console.log(busqueda);
    let codigoProductoEncontrado = productos.indexOf(busqueda);
    console.log(codigoProductoEncontrado);
    let productoEncontrado = productos.filter ((el) => el.nombre.includes(busqueda));
    console.log(productoEncontrado);
}