const doctorModel = require('../models/doctorModel');
const appointmentModel = require('../models/appointmentModel');

const getDoctorInfoController = async (req,res) => {
    try {
        const doctor = await doctorModel.findOne({userId: req.body.doctorId})
        if (doctor) {
            res.status(200).send({
                success: true,
                data: doctor
            })
        }
        else {
            res.status(200).send({
                success: false,
                message: 'doctor not found'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({success: false, message: error});
    }
}

const updateProfileController = async (req, res) =>{
    try {
        const doctor = await doctorModel.findOneAndUpdate(
            {userId: req.body.userId}, 
            req.body
        )
        res.status(201).send({
            success: true,
            message: 'doctor profile updated',
            data: doctor
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({success: false, message: error});
    }
}

const getDoctorByIdController = async (req,res) => {
    try {
        const doctor = await doctorModel.findOne({_id: req.body.doctorId});
        if(doctor) {
            res.status(200).send({
                success: true,
                message: 'Single Doc Info Fetched',
                data: doctor
            })
        } else {
            res.status(200).send({
                success: false,
                message: 'Doctor not found'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({success: false, message: error});
    }
};

const doctorAppointmentsController = async (req, res) => {
    try {
        const doctor = await doctorModel.findOne({userId: req.body.userId})
        const appointments = await appointmentModel.find({doctorId: doctor._id})
        res.status(200).send({
            success: true,
            message: '',
            data: appointments
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({success: false, message: error});
    }
}

module.exports = {
    getDoctorInfoController,
    updateProfileController,
    getDoctorByIdController,
    doctorAppointmentsController
}