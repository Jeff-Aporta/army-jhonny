function iniciar_sesion(){
    console.log("iniciar sesion")
    swal.fire({
        title: 'Iniciar sesión',
        html: `
            <form id="form-iniciar-sesion" action="/login" method="POST">
                <input type="text" id="input-usuario" class="swal2-input" placeholder="Usuario" name="usuario">
                <input type="password" id="input-contrasena" class="swal2-input" placeholder="Contraseña" name="contraseña">
                <div onclick="Swal.clickCancel()" class="btn tomato">
                    Cancelar
                </div>
                <div onclick="this.parentNode.submit();" class="btn dodgerblue">
                    Iniciar sesión
                </div>
            </form>
        `,
        showConfirmButton: false,
        showCloseButton: true,
        showCancelButton: false,
    });
}