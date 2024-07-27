// const express = require('express');
// const router = express.Router();
// const productSchema=require('../model/productschema')
// const upload=require("../config/multer-config")
// const cloudinary=require("../utils/cloudinary")
// router.post("/createpro", upload.single('image'), async (req, res) => {
//     try {
//         const result = await cloudinary.uploader.upload(req.file.path);
//         res.status(200).json({
//             message: 'Image uploaded successfully',
//             result
//         });
//     } catch (err) {
//         console.log("Error while uploading the image", err);
//         res.status(500).json({
//             message: "Error while uploading an image file"
//         });
//     }
//     // const {name,price,discount,bgcolor}=req.body;
//     // await productSchema.create({
//         //     // image:req.file,
//         //     name,
//         //     price,
//         //     discount,
//         //     bgcolor
//         // })
//     });


// module.exports = router;

const express = require('express');
const router = express.Router();
const upload = require('../config/multer-config');
const cloudinary = require('../utils/cloudinary');
const productschema = require('../model/productschema');

router.post("/createpro", upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        res.status(200).json({
            message: 'Image uploaded successfully',
            result
        });
        const {name,price,discount,bgcolor,panelcolor,textcolor}=req.body
        await productschema.create({
            image:result.url,
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor
        })
    } catch (err) {
        console.log("Error while uploading the image", err);
        res.status(500).json({
            message: "Error while uploading an image file"
        });
    }
});

module.exports = router;
