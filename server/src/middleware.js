import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./img/");
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${req.body.from}-${req.body.to}`;
    cb(null, filename + path.extname(file.originalname));
  },
});

export const uploader = multer({ storage }).single("img");
