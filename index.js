const express = require("express");
const app = express();
const upload = require("multer")({dest:"uploads/"});

app.get("/", (req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/uploads", upload.single("upfile"),
  (req,res,next)=>{
//   console.log(req.file);
  res.json({name: req.file.originalname, 
    type: req.file.mimetype,
    size: req.file.size
  });
});

app.listen(process.env.PORT || 3000);
