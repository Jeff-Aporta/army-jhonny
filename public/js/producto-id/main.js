const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (!urlParams.has("_id")) {
  location.href = "/";
}

let producto;

socket.emit("Productos: Cargar uno", urlParams.get("_id"));

socket.on("Productos: Cargar uno", (producto_recibido) => {
  producto = producto_recibido;

  let contenedorPrincipal = document.querySelector(".contenedor-principal");

  contenedorPrincipal.querySelector(".Titulo").innerHTML =
    producto_recibido.titulo;
  contenedorPrincipal.querySelector(
    ".Precio"
  ).innerHTML = `$${producto_recibido.precio}`;
  let img_principal = contenedorPrincipal.querySelector(".img-principal");
  img_principal.src = producto_recibido.imagenes[0].thumb.url;
  img_principal.onload = () => {
    img_principal.src = producto_recibido.imagenes[0].image.url;
    img_principal.onload = undefined;
  };
  let imagenes = contenedorPrincipal.querySelector(".Imagenes");
  let html = "";
  producto_recibido.imagenes.forEach((imagen, index) => {
    html += `
    <img 
        src="${imagen.thumb.url}" class="thumb ${
      index == 0 ? "thumb-activo" : ""
    }" 
    onmouseover="
        cambiarImagen('${imagen.image.url}', this);
    "
    onclick="
        cambiarImagen('${imagen.image.url}', this);
    ">`;
  });
  imagenes.innerHTML = html;
  contenedorPrincipal.querySelector(".Descripcion").innerHTML =
    producto_recibido.desc;
});
