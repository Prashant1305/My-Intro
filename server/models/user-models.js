const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) {
        next();
    }
    try {
        const saltRound = 10;
        const hash_passwrd = await bcrypt.hash(user.password, saltRound);
        user.password = hash_passwrd;
    } catch {
        next(error);
    }
});

//JWT
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d",
            });
    } catch (error) {
        console.error(error);
    }
};

userSchema.methods.myCompare = async function (password) {

    // console.log(password);
    return bcrypt.compare(password, this.password);
};

// define model or collection name
const User = new mongoose.model("User", userSchema);
module.exports = User;