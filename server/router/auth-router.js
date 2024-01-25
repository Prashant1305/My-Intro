const express = require("express");
const router = express.Router();
const { home, register, login, user } = require("../controllers/auth-controllers");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");
const { signupSchema, loginSchema } = require("../validaors/auth-validators");

router.get('/posting', (req, res) => {
    // res.send("post here");
    res.send(req.body);
});
router.get('/', home);
router.post('/register', validate(signupSchema), register);
router.post('/login', validate(loginSchema), login);
router.get('/user', authMiddleware, user);

module.exports = router;