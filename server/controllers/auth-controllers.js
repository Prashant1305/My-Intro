const User = require("../models/user-models");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
    res.send("this response is from auth controller")
}

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.json({ msg: "email already exist" });
        }
        // const saltRound = 10;
        // const hash_passwrd = await bcrypt.hash(password, saltRound);
        console.log(username, email, phone, password);

        const userCreated = await User.create({ username, email, phone, password });

        console.log(req.body);
        const data = req.body;
        res.status(201).json({ message: "registration successful", token: await userCreated.generateToken(), userId: userCreated._id.toString() });
        // res.send("response for registration");
    } catch (error) {
        console.log("registration failed");
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        console.log(userExist);
        if (!userExist) {
            return res.status(400).json({ message: "invalid credintials" });
        }
        // const isPasswordValid = await bcrypt.compare(password, userExist.password); // instead of this, we used method
        const isPasswordValid = await userExist.myCompare(password);
        // console.log(isPasswordValid);

        if (isPasswordValid) {
            res.status(200).json({ message: "Login Successful", token: await userExist.generateToken(), userId: userExist._id.toString() });
        }
        else {
            res.status(401).json({ message: "invalid email or password" });
        }
    } catch (error) {
        res.status(500).json("internal server error");
    }
}

const user = async (req, res) => {
    try {
        res.status(200).json({ msg: req.userData });
    } catch (error) {
        console.log(`error from the user route : ${error}`);
    }
}

module.exports = { home, register, login, user };