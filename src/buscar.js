import { getData } from "./getData.js";
const productos = await getData();

console.log(productos);

let search = document.getElementById("search");

search.addEventListener('click', buscar);

function buscar() {
    let busqueda = search.value.toUpperCase();
    console.log(busqueda);
    let productoEncontrado = productos.find (elemento => elemento === busqueda);
    console.log(productoEncontrado);
}