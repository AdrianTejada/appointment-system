const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const doctorModel = require('../models/doctorModel');

// login controller
const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.body.email})
        if (!user) {
            return res.status(200).send({message: 'user not found', success: false})
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if(!isMatch) {
            return res.status(200).send({message: 'Invalid Email or password', success: false})
        }
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        res.status(200).send({message: 'Login Success', success:true, token});
    } catch (error) {
        console.log(error);
        res.status(500).send({success: false, message: `Login Controller ${error.message}`})
    }
};

// login controller
const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({email:req.body.email})
        if (existingUser) {
            return res.status(200).send({message: 'User Already Exist', success: false})
        }
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        req.body.password = hashedPassword
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).send({message: 'Registered Successfully', success: true})
    } catch (error) {
        console.log(error)
        res.status(500).send({success: false, message: `Register Controller ${error.message}`})
    }
};

// auth controller
const authController = async (req, res) => {
    try {
        const user = await userModel.findOne({_id: req.body.userId})
        user.password = undefined
        if (!user) {
            res.status(200).send({success: false, message: 'user not found'})
        } else {
            res.status(200).send({success: true, user})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({success: false, message: error})
    }
}

// apply doctor controller
const applyDoctorController = async (req, res) => {
    try {
        const newDoctor = await doctorModel({...req.body, status: 'pending'})
        await newDoctor.save()
        const adminUser = await userModel.findOne({isAdmin: true})
        const notifications = adminUser.notifications
        notifications.push({
            type: 'apply-doctor-request',
            message: `${newDoctor.firstName} ${newDoctor.lastName} has applied for a Doctor Account`,
            data: {
                doctorId: newDoctor._id,
                name: newDoctor.firstName + " " + newDoctor.lastName,
                onClickPath: '/admin/doctors'
            }
        })

        await userModel.findByIdAndUpdate(adminUser._id, {notifications})
        res.status(201).send({
            success: true,
            message: 'Doctor Account Applied Successfully'
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({success: false, message: error})
    }
};

const getAllNotificationsController = async (req, res) => {
    try {
        const user = await userModel.findOne({_id: req.body.userId})
        const seen_notifications = user.seen_notifications
        const notifications = user.notifications
        seen_notifications.push(...notifications)
        user.notifications = [];
        user.seen_notifications = notifications;
        const updatedUser = await user.save();

        res.status(201).send({
            success: true, 
            message: 'Notifications marked as read', 
            data: updatedUser
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({success: false, message: error})
    }
};

module.exports = { 
    loginController, 
    registerController, 
    authController, 
    applyDoctorController,
    getAllNotificationsController
};