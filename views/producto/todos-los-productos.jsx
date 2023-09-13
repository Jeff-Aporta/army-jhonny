socket.emit("Productos: Cargar todos");

socket.on("Productos: Cargar todos", (productos) => {

  let {
    inicio,
    fin,
    ordenamiento
  } = todosLosProductosConfig;

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


  let productosCargados = <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div className="productos-cargados">
      {productos.map((producto, index) => {
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
        return <Producto />;

        function Producto() {
          return <Paper className="plantilla-producto">
            <ImgLink />
            <Info />
          </Paper>;
        }

        function ImgLink() {
          return <a href={`/producto/producto-id?_id=${producto._id}`}>
            <img src={producto.imagenes[0].thumb.url} />
          </a>;
        }

        function Info() {
          return <div className="info">
            <Precio />
            <Titulo />
          </div>;
        }

        function Titulo() {
          return <div className="titulo">
            {producto.titulo}
          </div>;
        }
        T
        function Precio() {
          return <div className="precio">
            {producto.precio}
          </div>;
        }
      })}
    </div>
  </ThemeProvider>

  ReactDOM.createRoot(document.querySelector(".r-todos-los-productos")).render(
    productosCargados
  );
});