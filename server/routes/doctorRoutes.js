const express = require('express');
const auth = require('../middlewares/auth');
const { getDoctorInfoController, updateProfileController } = require('../controllers/doctorCtrl'); 

const router = express.Router();

// get single doc info
router.post('/getDoctorInfo', auth, getDoctorInfoController)


router.post('/updateDoctorInfo', auth, updateProfileController)

module.exports = router