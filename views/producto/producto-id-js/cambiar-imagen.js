function cambiarImagen(url, img_thumb) {
  document.querySelector(".contenedor-principal .img-principal").src = url;
  document
    .querySelectorAll(".contenedor-principal .Imagenes .thumb")
    .forEach((thumb) => {
      thumb.classList.remove("thumb-activo");
    });
  img_thumb.classList.add("thumb-activo");
}
