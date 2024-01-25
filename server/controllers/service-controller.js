const Service = require("../models/service-model");
const services = async (req, res) => {
    try {
        const response = await Service.find(); // no condition are passed, so it will return all documents
        if (!response) {
            res.status(404).json({ msg: "No service found" });
            return;
        }
        res.status(200).json({ msg: response });
    } catch (error) {
        console.log(`error from service controller: ${error}`);
    }
};
module.exports = services;