const express = require('express');
const { 
    loginController, 
    registerController, 
    authController,
    applyDoctorController,
    getAllNotificationsController,
    deleteNotifications,
    getAllDoctorsController,
    bookAppointmentController,
    bookingAvailabilityController,
    userAppointmentsController,
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

// Mark notifications as read || POST
router.post('/ReadNotifications', auth, getAllNotificationsController);

// delete all notifications || post
router.post('/DeleteNotifications', auth, deleteNotifications)

// get all approved doctors || get
router.get('/getAllDoctors', auth, getAllDoctorsController)

// book appointmetn || post
router.post('/bookAppointment', auth, bookAppointmentController);

// check availability || post
router.post('/bookingAvailability', auth, bookingAvailabilityController)

router.get('/appointments', auth, userAppointmentsController)

module.exports = router;