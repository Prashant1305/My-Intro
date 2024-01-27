const jwt = require("jsonwebtoken");
const user = require("../models/user-models");

const adminMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "unauthorised HTTP, Token not provided" });
    }
    // assuming token is in the format Bearer <jwtToken> .
    // removing the "Bearer " prefix
    const jwtToken = token.replace("Bearer ", "");
    console.log("token from auth middleware", jwtToken);
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        console.log(isVerified);

        const userData = await user.findOne({ "email": isVerified.email }).select({ password: 0, });
        if (!userData.isAdmin) {
            return res.status(401).json({ message: "Admin privilages not provided" });
        }
        req.userData = userData; // passing data by adding property in request
        console.log(userData);

        next();
    } catch (error) {
        return res.status(401).json({ message: "unauthorised, invalid token." });
    }
};
module.exports = adminMiddleware;