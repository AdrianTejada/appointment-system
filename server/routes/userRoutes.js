const express = require('express');
const { 
    loginController, 
    registerController, 
    authController,
    applyDoctorController,
    getAllNotificationsController
} = require('../controllers/userCtrl');
const auth = require('../middlewares/auth');

const router = express.Router();

// routes
// LOGIN || POST
router.post('/login', loginController);
// REGISTER || POST
router.post('/register', registerController);

// AUTH || POST
router.post('/getUserData', auth, authController);

// apply doctor || POST
router.post('/applyDoctor', auth, applyDoctorController);

router.post('/ReadNotifications', auth, getAllNotificationsController);

module.exports = router;