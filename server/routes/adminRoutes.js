const express = require('express');
const auth = require('../middlewares/auth');
const { 
    getAllUsersController, 
    getAllDoctorsController
} = require('../controllers/adminCtrl');


const router = express.Router();

router.get('/getAllUsers', auth, getAllUsersController);

module.exports = router;