const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

let a = ReactDOM.createRoot;
ReactDOM.createRoot = function (element) {
  let root = a.call(this, element);
  [0, 100].forEach((time) => {
    setTimeout(() => {
      updateResponsive();
    }, time);
  });
  return root;
}

function addScript(src, type = "text/javascript", defer = true) {
  var script = document.createElement('script');
  script.setAttribute('src', src);
  script.setAttribute('type', type);
  script.setAttribute('defer', defer);
  document.body.appendChild(script);
}

function addLink(href, rel = "stylesheet") {
  var link = document.createElement('link');
  link.setAttribute('href', href);
  link.setAttribute('rel', rel);
  document.head.appendChild(link);
}

function ContenedorPrincipal({ children }) {
  return (
      <div className="contenedor-principal">
          {children}
      </div>
  );
}