
ReactDOM.createRoot(document.querySelector(".App")).render(
  <Seccion />
);

socket.emit("Productos: Cargar todos");

socket.on("Productos: Cargar todos", (productos) => {
  let productosCargados = <div className="productos-cargados"></div>;
  productosCargados.innerHTML = "";

  if (ordenamiento) {
    switch (ordenamiento) {
      case "alfabetico":
        productos.sort((a, b) => {
          let ta = a.titulo.toLowerCase();
          let tb = b.titulo.toLowerCase();
          if (ta < tb) {
            return -1;
          }
          if (ta > tb) {
            return 1;
          }
          return 0;
        });
        break;
      case "aleatorio":
        productos.sort(() => Math.random() - 0.5);
        break;
    }
  }
  productos.forEach((producto, index) => {
    if (inicio > 0) {
      if (index < inicio) {
        return;
      }
    }
    if (fin > 0) {
      if (index > fin) {
        return;
      }
    }
    let plantillaProducto = (
      <div className="plantilla-producto">
        <a href={`/producto/producto-id?_id=${producto._id}`}>
          <img src={producto.imagenes[0].thumb.url} />
        </a>
        <div className="info">
          <div className="precio">
            {`$${producto.precio}`}
          </div>
          <div className="titulo">
            {producto.titulo}
          </div>
        </div>
      </div>
    );
    productosCargados.appendChild(productoCargado);
  });
});