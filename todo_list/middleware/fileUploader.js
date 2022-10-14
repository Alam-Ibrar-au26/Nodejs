// const { appendFile } = require("fs");
// const multer = require("multer");
// const path = require("path");

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "upload/");
//   },
//   filename: (req, file, cb) => {
//     let ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext);
//   },
// });

// var upload = multer({
//   storage: storage,
//   fileFilter: function (req, file, cb) {
//     if (
//       file.mimetype === "image.png" ||
//       file.mimetype === "image/jpg" ||
//       file.mimetype === "image/jpeg"
//     ) {
//       cb(null, true);
//     } else {
//       console.log("Only png, jpg and jpeg file supported!");
//       cb(null, false);
//     }
//   },
//   limits: {
//     fileSize: 1024 * 1024 * 2,
//   },
// });

// module.exports = upload;


// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads")
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + "-" + Date.now() + ".jpg")
//     }
//   })
// }).single("user_file");

// app.post("/upload", upload, (req, res ) => {
//   res.send("File uploaded")
// });