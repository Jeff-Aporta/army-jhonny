module.exports = function (app_pack) {
    let { io, google } = app_pack;

    io.on('connection', function (socket) {

        socket.on('obtener todos los productos', async function () {
            let productos = await google.productos.getAllRows();
            io.to(socket.id).emit("todos los productos", productos);
        });

        socket.on('registrar producto', async function (userTest) {
            let user = await google.productos.getRowFromID(userTest["ID"]);
            if (user) {
                io.to(socket.id).emit("producto ya existe");
                return
            } else {
                if (await google.users.addUser(userTest)) {
                    io.to(socket.id).emit("registro exitoso");
                }else{
                    io.to(socket.id).emit("producto ya existe");
                }
            }
        });
    });
}