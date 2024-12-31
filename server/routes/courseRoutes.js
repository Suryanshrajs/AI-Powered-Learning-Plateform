const express = require('express')
const router = express.Router()
const { getCourses } = require('../controllers/courseControllers')

const { login } = require('../controllers/login')
const { register } = require('../controllers/register')
const verifyToken = require('../middleware/verifyToken');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/courses', getCourses);


module.exports = router