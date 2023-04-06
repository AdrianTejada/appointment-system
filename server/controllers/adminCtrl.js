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

const changeAccountStatusController = async (req, res) => {
    try {
        const {doctorId, status} = req.body
        const doctor = await doctorModel.findOneAndUpdate({userId: doctorId}, {status});
        const user = await userModel.findOne({_id: doctorId});
        // console.log('user', user)
        user.notifications.push({
            type: 'doctor-account-request-updated',
            message: `Your doctor account request has been ${status}`,
            onClickPath: '/notifications',
        })
        if (status === 'approved'){
            user.isDoctor = true;
        } else {
            user.isDoctor = false;
        }
        await user.save()
        res.status(201).send({
            success: true,
            message: 'Account Status Updated',
            data: doctor
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({success: false, message: error});
    }
}

module.exports = {
    getAllUsersController,
    getAllDoctorsController,
    changeAccountStatusController
}