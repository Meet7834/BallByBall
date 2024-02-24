const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// POST
router.post('/register', UserController.createUser);

// GET
router.get('/', UserController.getAllUsers);
router.get('/:userId', UserController.getUserById);

// PUT
router.put('/:userId', UserController.updateUser);

// DELETE
router.delete('/delete/all', UserController.deleteAllUsers);
router.delete('/:userId', UserController.deleteUser);

module.exports = router;