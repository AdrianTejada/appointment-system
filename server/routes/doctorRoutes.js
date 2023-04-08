const express = require('express');
const auth = require('../middlewares/auth');
const { 
    getDoctorInfoController, 
    updateProfileController,
    getDoctorByIdController
} = require('../controllers/doctorCtrl'); 

const router = express.Router();

// get single doc info || post
router.post('/getDoctorInfo', auth, getDoctorInfoController)

// update doc infor || post
router.post('/updateDoctorInfo', auth, updateProfileController)

// get doctor by id || post
router.post('/getDoctorById', auth, getDoctorByIdController)

module.exports = router