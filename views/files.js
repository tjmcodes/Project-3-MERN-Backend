import express from 'express';
import multer from 'multer';
// import { UploadApiResponse, v2 as cloudinary } from 'cloudinary'

import pkg from 'cloudinary';
const { UploadApiResponse, v2: cloudinary } = pkg;


const router = express.Router();

const storage = multer.diskStorage({})

const upload = multer({
  storage,
});

let uploadedFile = null

router.post("/upload", upload.single("myFile"),async (req, res) => {
  try {
    if (!req.file)
      return res.status(400).json({ message: "File not found" });
      

    console.log(req.file);
    uploadedFile = UploadApiResponse;
    
    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "testFolder",
        resource_type: "auto",
      })

    } catch (error) { 
      console.log(error.message)
      
      return res.status(400).json({ message: "Cloudinary Error" });

    } 
    const { originalname } = req.file;
    const { secure_url, bytes, format } = uploadedFile;

    const file = await File.create({
      filename: originalname,
      sizeInBytes: bytes,
      secure_url,
      format,
    });
    res.status(200).json(file);
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "Server error" })
  }


    
});



export default router;