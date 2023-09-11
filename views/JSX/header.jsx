addLink("/JSX/header.css");

window.addEventListener("resize", () => {
    document.querySelector(".menu-bars").checked = false;
});

window.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
        document.querySelector(".menu-bars").checked = false;
    }
});

function Header() {

    let bordeBoton = {
        borderRight: "1px solid gray",
        background: "transparent !important",
    }

    let BotonHamburguesaResponsive = () => {
        return (
            <label
                className={`
                    ${ifw("display", "inline-block", "less", DISRRUPCION_RESPONSIVE)}
                    ${ifw("display", "none", "up", DISRRUPCION_RESPONSIVE)}
                    fs-50px
                    c-pointer
                `}
            >
                <input
                    type="checkbox"
                    className="
                        menu-bars
                        d-none
                    "
                    id="menu-bars"
                />
                <i className="fa-solid fa-bars"></i>
            </label>
        );
    };

    let SombraResponsive = () => {
        return (
            <label htmlFor="menu-bars" className="sombra-menu-bars"> </label>
        );
    };

    let BotonCerrarResponsive = () => {
        return (
            <label
                htmlFor="menu-bars"
                className={`
                    ${ifw("display", "none", "up", DISRRUPCION_RESPONSIVE)}
                    fs-150P
                    c-tomato
                    c-pointer
                    ta-right
                    display_none-up-950px
                `}
            >
                &times;
            </label>
        );
    };

    return (
        < div className="header" style={{ backgroundColor: darkTheme.palette.grey[900] }} >
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <SombraResponsive />
                <Logo1 />
                <BotonHamburguesaResponsive />
                <OpcionesCentrales />
                <BotonWpp />
            </ThemeProvider>
        </div >
    );

    function Logo1() {
        return <span className={`
                    ${ifw("display", "none", "less", DISRRUPCION_RESPONSIVE)} 
                    logo
                `}>
            <a href="/">
                <i className="fa-solid fa-star c-red"></i>
                ARMY
            </a>
        </span>;
    }

    function OpcionesCentrales() {
        return <div
            className={`
                ${ifw("position", "fixed", "less", DISRRUPCION_RESPONSIVE)}
                ${ifw("padding", "10px 60px", "less", DISRRUPCION_RESPONSIVE)}
                ${ifw("top", "0", "less", DISRRUPCION_RESPONSIVE)}
                ${ifw("height", "100vh", "less", DISRRUPCION_RESPONSIVE)}
                ${ifw("flex-direction", "column", "less", DISRRUPCION_RESPONSIVE)}
                menu-responsive
            `}
            style={{ backgroundColor: darkTheme.palette.grey[900] }}
        >
            <BotonCerrarResponsive />

            <br />

            <Logo2 />

            <br />

            <OpcionesPrincipales className={`
                        ${ifw("display", "none", "up", DISRRUPCION_RESPONSIVE)} 
                        flexVertical
                    `} />
            <OpcionesPrincipales className={`
                        ${ifw("display", "none", "less", DISRRUPCION_RESPONSIVE)}
                    `} />
        </div>;
    }

    function Logo2() {
        return <div className={`
                        ${ifw("display", "none", "up", DISRRUPCION_RESPONSIVE)} 
                        logo2
                    `}>
            <a href="/">
                <i className="fa-solid fa-star"></i>
                ARMY
            </a>
        </div>;
    }

    function BotonWpp() {
        return <Button
            className="boton-header display_none-less-950px"
            href="/logout"
        >
            <span className="c-limegreen">
                <i className="fa-brands fa-whatsapp"></i> &nbsp; 300 000 0000
            </span>
        </Button>;
    }

    function OpcionesPrincipales({ className }) {
        let botones = (
            <span className={className}>
                <BotonProductos />
                <BotonCarrito />
                <BotonIniciarCerrarSesion />
            </span>
        );
        return botones;
    }

    function BotonIniciarCerrarSesion() {
        return (
            !user ? BotonIniciarSesion() : BotonCerrarSesion()
        )

        function BotonCerrarSesion() {
            return <Button
                className="boton-header padding-top_30px-less-950px"
                href="/logout"
            >
                <span className="c-white">
                    <i className="fa-regular fa-circle-xmark"></i> Cerrar sesión
                </span>
            </Button>;
        }

        function BotonIniciarSesion() {
            return <Button
                className="boton-header padding-top_30px-less-950px"
                onClick={iniciar_sesion}
            >
                <span className="c-white">
                    <i className="fa-regular fa-circle-user"></i> Iniciar sesión
                </span>
            </Button>;
        }
    }

    function BotonCarrito() {
        return (
            <Button className={`
                    ${ifw("border-right", "1px solid gray", "up", DISRRUPCION_RESPONSIVE)}
                    ${ifw("border", "none", "less", DISRRUPCION_RESPONSIVE)}
                    boton-header 
                `}
                href="/carrito-de-compras"
            >
                <span className="c-white">
                    <i className="fa-solid fa-cart-shopping"></i> Carrito
                </span>
            </Button>
        )
    }

    function BotonProductos() {
        return (
            <Button className={`
                    ${ifw("border-right", "1px solid gray", "up", DISRRUPCION_RESPONSIVE)}
                    ${ifw("border", "none", "less", DISRRUPCION_RESPONSIVE)}
                    boton-header
                `}
                href="/producto/productos" style={bordeBoton}>
                <span className="c-white">
                    <i className="fa-solid fa-person-rifle"></i> Productos
                </span>
            </Button>
        )
    }
}