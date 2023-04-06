const userModel = require('../models/userModel');
const doctorModel = require('../models/doctorModel');

const getAllUsersController = async (req, res) => {
    try {
        const users = await userModel.find({})
        res.status(200).send({
            success: true,
            message: 'all users',
            data: users
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({success: false, message: error});
    }
};

const getAllDoctorsController = async (req, res) => {
    try {
        const doctors = await doctorModel.find({})
        res.status(200).send({
            success: true,
            message: 'all doctors',
            data: doctors
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({success: false, message: error});
    }
};

module.exports = {
    getAllUsersController,
    getAllDoctorsController
}