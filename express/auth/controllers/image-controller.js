const Image = require('../models/Image');
const {uploadToCloudinary} = require('../helpers/cloudinaryHelper');
const { model } = require('mongoose');

const uploadImageController = async(req, res) => {
    try {
        if(!req.file){
            return res.status(400).json({
                success : false,
                message : 'File is required. Please upload an image'
            })
        }

        const {url, publicId} = await uploadToCloudinary(req.file.path);
        const uploadedImage = new Image({
            url,
            publicId,
            uploadedBy : req.userInfo.userId
        })
        await uploadedImage.save();

        res.status(201).json({
            success : true,
            message : 'Image uploaded successfully',
            image : uploadedImage
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : 'Something went wrong! Please try again'
        })
    }
};

module.exports = {
    uploadImageController
};