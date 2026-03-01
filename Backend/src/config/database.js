const mongoose = require('mongoose');


async function connectDB(){
    await mongoose.connect(process.env.Mongo_Uri)
    .then(()=> {
        console.log('Connected to Database');
    })
}

module.exports = connectDB;