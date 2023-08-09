const multer = require("multer");
const imgbbUploader = require("imgbb-uploader");
const fs = require("fs");

let API_KEY = "f38bfb60ccdac252c6f30c398a8cda35";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "TEMP");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = cb(
      null,
      Math.random().toString().replaceAll("0.", "") +
        file.originalname.substring(file.originalname.lastIndexOf("."))
    );
  },
});

const upload = multer({ storage });

async function upload_imgbb(options) {
  options["apiKey"] = API_KEY;
  let response = await imgbbUploader(options);

  return response;
}

module.exports = (pack_app) => {
  const { app, mongo } = pack_app;
  app.post("/crear-producto", upload.any(), async (req, res, next) => {
    let imagenes = [];
    for (let i = 0; i < req.files.length; i++) {
      let file = req.files[i];
      let imgbb = await upload_imgbb({
        imagePath: file.path,
      });
      imagenes.push(imgbb);
      setTimeout(() => {
        fs.unlink(file.path, (err) => {
          if (err) {
            throw err;
          }
          console.log("Archivo eliminado");
        });
      }, 1000);
    }
    req.body.imagenes = imagenes;
    console.log(req.body);
    mongo.escribir(req.body, "Productos");

    res.redirect("/");
  });
};
