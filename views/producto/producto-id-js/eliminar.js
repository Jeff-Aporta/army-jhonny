socket.on("Productos: Eliminar", (producto_recibido) => {
  location.href = "/";
});

async function Eliminar() {
  let respuesta = await swal.fire({
    title: "¿Estás seguro?",
    text: "Esta acción no se puede deshacer",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
  });
  if (respuesta.isConfirmed) {
    document.querySelector(".eliminar-producto").remove();
    document.querySelector(".eliminando-producto").style.display = "";
    socket.emit("Productos: Eliminar", producto._id);
  }
}
