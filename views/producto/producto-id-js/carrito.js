async function agregarAlCarrito() {
        let respuesta = await swal.fire({
                title: "Cantidad",
                input: "number",
                inputAttributes: {
                        min: 1,
                        step: 1,
                },
                inputValue: 1,
                confirmButtonText: "Agregar",
                showCloseButton: true,
        });
        if (respuesta.isConfirmed) {
                let cantidad = parseInt(respuesta.value);
                let carrito = JSON.parse(localStorage.getItem("carrito")) ?? {};
                carrito[producto._id] = {
                        cantidad
                };
                localStorage.setItem("carrito", JSON.stringify(carrito));
                swal.fire({
                        title: "Producto agregado al carrito",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                });
        }
}