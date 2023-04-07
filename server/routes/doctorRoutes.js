const express = require('express');
const auth = require('../middlewares/auth');
const { getDoctorInfoController } = require('../controllers/doctorCtrl'); 

const router = express.Router();

// get single doc info
router.post('/getDoctorInfo', auth, getDoctorInfoController)

module.exports = router