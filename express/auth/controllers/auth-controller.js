const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async(req, res) => {
    try {
        const {username, email, password, role} = req.body;

        const userWithSameUsername = await User.findOne({ username });
        if (userWithSameUsername) {
            return res.status(400).json({
                success: false,
                message: 'Username already exists'
            });
        }

        const userWithSameEmail = await User.findOne({ email });
        if (userWithSameEmail) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists'
            });
        }
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password : hashedPassword,
            role : role || 'user'
        });
        await newUser.save();

        if(newUser){
            res.status(201).json({
                success : true,
                message : 'User is registered successfully!'
            }) 
        } else {
            res.status(400).json({
            success : false,
            message : 'Unable to register user! Please try again.'
        })
        }
        console.log('newUser', newUser);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : 'Some error occured! Please try again'
        })
    }
};

const loginUser = async(req, res) => {
    try {
        const {username, password} = req.body;

        const existingUser = await User.findOne({username});
        if(!existingUser){
            res.status(400).json({
                success : false,
                message : `User doesn't exist!`
            })
        }

        const passwordMatch = await bcrypt.compare(password,existingUser.password);
        if(!passwordMatch){
            res.status(400).json({
                success : false,
                message : 'Invalid credentials!'
            })
        }

        const accessToken = jwt.sign({
            userId : existingUser._id,
            username : existingUser.username,
            role : existingUser.role
        }, process.env.JWT_SECRET_KEY, {
            expiresIn : '15m'
        })

        res.status(200).json({
            success : true,
            message : 'Logged in successfully',
            accessToken
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : 'Some error occured! Please try again'
        })
    }
};

module.exports = {
    registerUser,
    loginUser
}