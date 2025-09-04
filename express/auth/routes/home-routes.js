const express = require('express');
const authMiddelware = require('../middleware/auth-middleware');

const router = express.Router();

router.get('/welcome', authMiddelware, (req, res) => {
    const {username, userId, role} = req.userInfo;
    res.json({
        message : 'Welcome to the Home Page',
        user : {
            _id : userId,
            username,
            role
        }
    })
})


module.exports = router;