const express = require('express');
const authMiddelware = require('../middleware/auth-middleware');
const adminMiddelware = require('../middleware/admin-middleware');

const router = express.Router();


router.get('/welcome', authMiddelware, adminMiddelware, (req, res) => {
    res.json({
        message : 'Welcome to the Admin Page',
    })
});

   
module.exports = router;