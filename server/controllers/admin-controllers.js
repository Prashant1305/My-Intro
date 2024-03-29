const User = require("../models/user-models");
const Contact = require("../models/contact-model");
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        // console.log(users);
        if (!users || users.length == 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        // console.log(contacts);
        if (!contacts || contacts.length == 0) {
            return res.status(400).json({ message: "No contacts found" });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const temp = await User.deleteOne({ _id: id });
        console.log(temp);
        res.status(200).json({ message: "User Deleted Successfully" });
    } catch (error) {
        next(error);
    }
}

// retriving user info before editing
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 });
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

// editing user info
const updatUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;
        const updatedData = await User.updateOne({ _id: id }, { $set: updatedUserData });
        // console.log(updatedUserData);
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
}

const deleteContactById = async (req, res, next) => {
    console.log("deleteContactById was called");
    try {
        const id = req.params.id;
        console.log(id);
        const temp = await Contact.deleteOne({ _id: id });
        // console.log(temp);
        res.status(200).json({ message: "contact deleted" });
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllUsers, getAllContacts, deleteUser, getUserById, updatUserById, deleteContactById };