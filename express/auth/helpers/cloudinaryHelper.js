const cloudinary = require('../config/cloudinary');
const { updateMany } = require('../models/User');

// Handle SSL certificate issues in development
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const uploadToCloudinary = async(filePath) => {
    try {
        const uploadResult = await cloudinary.uploader.upload(filePath, {
            timeout: 60000,
            resource_type: "auto"
        });

        return {
            url : uploadResult.secure_url,
            publicId : uploadResult.public_id
        };
    } catch (error) {
        console.log('Error while uploading to cloudinary', error);
        throw new Error('Error while uploading to cloudinary');
    }
};

module.exports = {
    uploadToCloudinary
};