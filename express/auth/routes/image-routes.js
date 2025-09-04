const express = require('express');
const authMiddelware = require('../middleware/auth-middleware');
const adminMiddelware = require('../middleware/admin-middleware');
const uploadMiddleware = require('../middleware/upload-middleware');
const { uploadImageController } = require('../controllers/image-controller');

const router = express.Router();

router.post(
    '/upload',
    authMiddelware,
    adminMiddelware,
    uploadMiddleware.single('image'),
    uploadImageController
);


module.exports = router;