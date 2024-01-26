const express = require("express");
const { getAllUsers, getAllContacts, deleteUser, getUserById } = require("../controllers/admin-controllers");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router.get("/users", adminMiddleware, getAllUsers);
router.get("/contacts", adminMiddleware, getAllContacts);
router.delete("/users/delete/:id", adminMiddleware, deleteUser);
router.delete("/users/:id", adminMiddleware, getUserById);

module.exports = router;