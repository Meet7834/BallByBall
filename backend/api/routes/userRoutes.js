const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Get user by ID
router.get('/:userId', UserController.getUserById);

// Create a new user
router.post('/', UserController.createUser);

// Update user by ID
router.put('/:userId', UserController.updateUser);

// Delete user by ID
router.delete('/:userId', UserController.deleteUser);

module.exports = router;