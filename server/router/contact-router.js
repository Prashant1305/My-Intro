const express = require("express");
const contactForm = require("../controllers/contact-controller");
const validate = require("../middlewares/validate-middleware");
const contactSchema = require("../validaors/contact-validators");

const router = express.Router();

router.route("/contact").post(validate(contactSchema), contactForm);

module.exports = router;