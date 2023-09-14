addScript({ src: "/producto/producto-id-js/cambiar-imagen.js" });
addScript({ src: "/producto/producto-id-js/eliminar.js" })
addScript({ src: "/producto/producto-id-js/carrito.js", onload: () => { 
        addScript({ src: "/producto/producto-id-js/eliminar.js", onload: renderizarApp });
} })

addLink("/producto/css/productos.css")
addLink("/css/loaders/dual-ring.css")

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (!urlParams.has("_id")) {
        location.href = "/";
}

let producto;

console.log(document.querySelector(".App"));

function renderizarApp() {
        ReactDOM.createRoot(document.querySelector(".App")).render(
                <ThemeProvider theme={darkTheme}>
                        <Header />
                        <div className="contenedor-principal ta-center">
                                <Card
                                        className="contenedor presentador-un-producto flexSpaceEvenly"
                                >
                                        <div className="presentador-imagenes">
                                                <img className="img-principal" />
                                                <div className="Imagenes"></div>
                                        </div>
                                        <div className="textos">
                                                <div>
                                                        <h1 className="Titulo">Titulo producto</h1>
                                                        <br />
                                                        <h2>Precio: <span className="Precio">$123.456</span></h2>
                                                </div>
                                                <br />
                                                <div className="Descripcion">Descripción</div>
                                                <br />
                                                <br />
                                                <div className="btn dodgerblue" onClick={agregarAlCarrito}>
                                                        Agregar al carrito <i className="fa-solid fa-cart-shopping"></i>
                                                </div>

                                                <hr />

                                                <div className="btn tomato eliminar-producto" onClick={Eliminar}>
                                                        Eliminar producto
                                                </div>
                                                <div className="btn eliminando-producto d-none">
                                                        <div className="lds-dual-ring"></div>
                                                        &nbsp; Eliminando
                                                </div>
                                        </div>
                                </Card>
                        </div>
                        <Footer />
                </ThemeProvider>
        );

        socket.emit("Productos: Cargar uno", urlParams.get("_id"));
}

socket.on("Productos: Cargar uno", (producto_recibido) => {
        producto = producto_recibido;

        let contenedorPrincipal = document.querySelector(".presentador-un-producto");

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
        src="${imagen.thumb.url}" class="thumb ${index == 0 ? "thumb-activo" : ""
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