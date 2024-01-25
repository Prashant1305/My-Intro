const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

// mongoose.connect(uri);

const connectDb = async () => {
    try {
        await mongoose.connect(uri);
        console.log("connection succesfull to db");
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;