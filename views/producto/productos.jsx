addLink("/producto/css/productos.css");

let todosLosProductosConfig = {
  inicio: -1,
  fin: -1,
  ordenamiento: "aleatorio"
}

ReactDOM.createRoot(document.querySelector(".App")).render(
  <React.Fragment>
    <Header />
    <div className="contenedor-principal">
      
      <a href="/producto/producto-nuevo">
        <Button variant="contained" endIcon={<i className="fa-solid fa-circle-plus"></i>}>
          Crear nuevo producto 
        </Button>
      </a>

      <hr />

      <h1>
        Productos
      </h1>
      <br />
      <div className="r-todos-los-productos">
      </div>

    </div>
    <Footer />
  </React.Fragment>
);