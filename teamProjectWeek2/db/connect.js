
const mongoose = require('mongoose');

const uri = "";

const connectDB = async() => {
    await mongoose.connect(uri);
    console.log('db connected');
}

module.exports = connectDB;