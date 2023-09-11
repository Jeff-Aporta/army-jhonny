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
    <React.Fragment>
        <Header />
        <ContenedorPrincipal>
          <h1>
            Productos
          </h1>
          <App />
        </ContenedorPrincipal>
        <Footer />
    </React.Fragment>
);