const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

let a = ReactDOM.createRoot;
ReactDOM.createRoot = function (element) {
  let root = a.call(this, element);
  function esperar() {
    try {
      updateResponsive();
    } catch (error) {
      setTimeout(() => {
        esperar();
      }, 100);
    }
  }
  esperar();
  return root;
}

function ContenedorPrincipal({ children }) {
  return (
    <div className="contenedor-principal">
      {children}
    </div>
  );
}