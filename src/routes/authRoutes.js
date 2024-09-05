// src/routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser, registerAdmin } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/registerAdmin', registerAdmin);
router.post('/login', loginUser);

module.exports = router;
