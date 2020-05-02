const mongoose = require("mongoose");
require('dotenv').config();

// get the mongo credentials
const db = process.env.MONGO_URI;

// connect to mongo
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('mongodb connected ...');
    } catch (err) {
        console.error(err.message)
        // this escapes from the whole process with a failure
        process.exit(1);
    }
}

module.exports = connectDB;