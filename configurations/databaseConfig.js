const mongoose = require('mongoose');

const databaseConnection = ()=>{
    let connection = mongoose.connect("mongodb+srv://talhahaider074:4abFaQRIZI8AOTMA@cluster0.2pomobt.mongodb.net/dotcoinverseDb")
    if(connection){
        console.log('Databse Connected')
    }
    else{
        console.log('Database Not Connected')
    }
}

module.exports = databaseConnection