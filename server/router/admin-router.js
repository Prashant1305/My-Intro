const express = require("express");
const { getAllUsers, getAllContacts, deleteUser, getUserById, updatUserById, deleteContactById } = require("../controllers/admin-controllers");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router.get("/users", adminMiddleware, getAllUsers);
router.get("/contacts", adminMiddleware, getAllContacts);
router.delete("/users/delete/:id", adminMiddleware, deleteUser);
router.get("/users/:id", adminMiddleware, getUserById);
router.patch("/users/update/:id", adminMiddleware, updatUserById);
router.delete("/contacts/delete/:id", adminMiddleware, deleteContactById);

module.exports = router;