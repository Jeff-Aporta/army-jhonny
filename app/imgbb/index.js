const multer = require('multer')
const imgbbUploader = require("imgbb-uploader");

let API_KEY = "f38bfb60ccdac252c6f30c398a8cda35";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'TEMP')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = cb(null, Math.random().toString().replaceAll("0.", "")+file.originalname.substring(file.originalname.lastIndexOf('.')))
  }
})

const upload = multer({ storage });

async function upload_imgbb(opciones) {
  opciones["apiKey"] = API_KEY
  let response = await imgbbUploader(options);

  return response;
}

module.exports = (pack_app) => {
  const { app } = pack_app;
  app.post('/upload-imgs', upload.any(), async (req, res, next) => {
    for (let i = 0; i < req.files.length; i++) {
      let file = req.files[i];
      let { path, fieldname } = file;
      console.log(file);
      //let imgbb = await upload_imgbb(options);
    }
    res.redirect('/');
  });
}