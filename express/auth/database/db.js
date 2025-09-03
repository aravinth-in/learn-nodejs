const mongoose = require('mongoose');

const connectToDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Datbase connected successfully');  
    } catch (error) {
        console.log('Database connection is failed');
        process.exit(1);
    }
};

module.exports = connectToDB;