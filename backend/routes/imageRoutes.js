const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const Image = require("../models/image");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {
    try {

        const file = req.file;

        const result = await cloudinary.uploader.upload(
            `data:${file.mimetype};base64,${file.buffer.toString("base64")}`
        );

        const newImage = new Image({
            imageUrl: result.secure_url
        });

        await newImage.save();

        res.json(newImage);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    const images = await Image.find();
    res.json(images);
});

module.exports = router;