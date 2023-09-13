let todosLosProductosConfig = {
  inicio: -1,
  fin: 6,
  ordenamiento: "aleatorio"
}

function App() {
  return (
    <div className="r-todos-los-productos">
    </div>
  );
}

ReactDOM.createRoot(document.querySelector(".App")).render(
  <ThemeProvider theme={darkTheme}>
    <Header />
    <ContenedorPrincipal>
      <h1>
        Productos
      </h1>
      <App />
      <br />
      <Presentación />
    </ContenedorPrincipal>
    <Footer />
  </ThemeProvider>
);

function Presentación() {
  return <center>
    <Paper style={{ padding: "30px", display: "inline-block" }}>
      <Box>
        <h1 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
          Tu destino para accesorios militares de alta calidad
        </h1>
        <div style={{ width: "80%" }}>
          ¡Equípate con lo mejor en nuestra tienda de accesorios militares!
          Encuentra una amplia gama de productos resistentes y funcionales para
          tus necesidades tácticas y de aventura al aire libre.
        </div>
        <br />
        <br />
        <h1>
          CONTACTANOS AHORA
        </h1>
        <br />
        <Button variant="contained" color="primary" endIcon={<i className="fa-brands fa-whatsapp"></i>} style={{ backgroundColor: "#25d366", color: "white" }}>
          Whatsapp
        </Button>
        <br />
        <br />
      </Box>
    </Paper>
  </center>;
}
