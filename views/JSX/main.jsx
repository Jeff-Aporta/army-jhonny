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
  [0, 100].forEach((time) => {
    setTimeout(() => {
      updateResponsive();
    }, time);
  });
  return root;
}

function addScript({src, type = "text/javascript", defer = true, onload}) {
  var script = document.createElement('script');
  script.setAttribute('src', src);
  script.setAttribute('type', type);
  script.setAttribute('defer', defer);
  script.onload = onload;
  document.head.appendChild(script);
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